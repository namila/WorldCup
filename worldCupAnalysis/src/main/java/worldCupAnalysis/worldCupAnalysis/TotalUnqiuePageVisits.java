package worldCupAnalysis.worldCupAnalysis;

import java.io.IOException;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.NullWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.util.GenericOptionsParser;

import utils.LogTypes;
import utils.Utilities;

public class TotalUnqiuePageVisits {
	
	static class TotalUnqiuePageVisitsMapper extends Mapper<Object, Text, Text,  NullWritable>{
		@Override
		protected void map(Object key, Text value, Mapper<Object, Text, Text, NullWritable>.Context context) 
				throws IOException, InterruptedException{
			String logLine = value.toString();
			
			if(Utilities.isRelatedLogLine(logLine, LogTypes.PAGE_VIEWS)){
				String userId = Utilities.getUserId(logLine);
				String UrlPath = Utilities.getLogUrl(logLine);
				context.write(new Text(userId + "_" + UrlPath), NullWritable.get());
			}
		}
	}
	
	static class TotalUnqiuePageVisitsReducer extends Reducer<Text, NullWritable, Text, IntWritable>{
		private static int totalUniquePageVisitCount = 0;
		
		@Override
		protected void reduce(Text arg0, Iterable<NullWritable> arg1,
				Reducer<Text, NullWritable, Text, IntWritable>.Context arg2) throws IOException, InterruptedException {
			totalUniquePageVisitCount += 1;
		}
		
		@Override
		protected void cleanup(Reducer<Text, NullWritable, Text, IntWritable>.Context context)
				throws IOException, InterruptedException {
			context.write(new Text("Unique Page Visit Count"), new IntWritable(totalUniquePageVisitCount));
		}

	}
	
	public static void main(String[] args) throws IOException, ClassNotFoundException, InterruptedException {
		Configuration configuration = new Configuration();
		String[] filePaths = new GenericOptionsParser(configuration, args).getRemainingArgs();
		
		if(filePaths.length != 2){
			System.err.println("Please specify input and output paths");
			System.exit(2);
		}
		
		Job TotalUnqiuePageVisitsJob =Job.getInstance(configuration, "Total Unqiue Page Visits");
		TotalUnqiuePageVisitsJob.setJarByClass(TotalUnqiuePageVisits.class);
		TotalUnqiuePageVisitsJob.setMapperClass(TotalUnqiuePageVisitsMapper.class);
		TotalUnqiuePageVisitsJob.setReducerClass(TotalUnqiuePageVisitsReducer.class);
		TotalUnqiuePageVisitsJob.setOutputKeyClass(Text.class);
		TotalUnqiuePageVisitsJob.setOutputValueClass(NullWritable.class);
		FileInputFormat.addInputPath(TotalUnqiuePageVisitsJob, new Path(filePaths[0]));
		FileOutputFormat.setOutputPath(TotalUnqiuePageVisitsJob, new Path(filePaths[1]));
		System.exit(TotalUnqiuePageVisitsJob.waitForCompletion(true) ? 0: 1);
	}

}
