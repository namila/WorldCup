package worldCupAnalysis.worldCupAnalysis;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.util.GenericOptionsParser;

import utils.*;

/**
 * Hello world!
 *
 */
public class TotalPageVisits {

	static class TotalPageVisitsMapper extends Mapper<Object, Text, Text, IntWritable> {
		private static IntWritable oneCount = new IntWritable(1);
		
		@Override
		protected void map(Object key, Text value, Mapper<Object, Text, Text, IntWritable>.Context context)
				throws IOException, InterruptedException {
			
			if(Utilities.isRelatedLogLine(value.toString(), LogTypes.PAGE_VIEWS)){
				context.write(value, oneCount);
			}
			
		}
	}
	
	static class TotalPageVisitsReducer extends Reducer<Text, IntWritable, Text, IntWritable>{
		private static int totalViewCount = 0;
		
		@Override
		protected void reduce(Text arg0, Iterable<IntWritable> arg1,
				Reducer<Text, IntWritable, Text, IntWritable>.Context arg2) throws IOException, InterruptedException {	
			for(IntWritable i : arg1){
				totalViewCount += i.get();
			}
		}
		
		@Override
		protected void cleanup(Reducer<Text, IntWritable, Text, IntWritable>.Context context)
				throws IOException, InterruptedException {
			context.write(new Text("Total View Count"), new IntWritable(totalViewCount));
		}
	}
	
	public static void main(String[] args) throws InterruptedException, IOException, ClassNotFoundException {
		Configuration configuration = new Configuration();
		String filePaths[] = new GenericOptionsParser(configuration, args).getRemainingArgs();
		
		if(filePaths.length != 2){
			System.err.println("Provide input and output paths");
			System.exit(2);
		}
		
		Job totalPageVisitsJob = Job.getInstance(configuration, "Total Page Visits");
		totalPageVisitsJob.setJarByClass(TotalPageVisits.class);
		totalPageVisitsJob.setMapperClass(TotalPageVisitsMapper.class);
		totalPageVisitsJob.setReducerClass(TotalPageVisitsReducer.class);
		totalPageVisitsJob.setOutputKeyClass(Text.class);
		totalPageVisitsJob.setOutputValueClass(IntWritable.class);
		FileInputFormat.addInputPath(totalPageVisitsJob, new Path(filePaths[0]));
		FileOutputFormat.setOutputPath(totalPageVisitsJob, new Path(filePaths[1]));
		System.exit(totalPageVisitsJob.waitForCompletion(true)? 0: 1);	
	}
}
