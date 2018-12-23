package worldCupAnalysis.worldCupAnalysis;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.regex.Pattern;

import utils.LogTypes;
import utils.Utilities;

public class DataTest {
	public static void main(String[] args) throws IOException {
		int lineCount = 0;
		File sampleDataFile = new File("TestData/test1.txt");
		BufferedReader reader = new BufferedReader(new FileReader(sampleDataFile));

		String fileLine = reader.readLine();

		while (fileLine != null) {
			if (Utilities.isRelatedLogLine(fileLine, LogTypes.PAGE_VIEWS)) {
				lineCount += 1;
				System.out.println(Utilities.getLogUrl(fileLine));
			}
			fileLine = reader.readLine();
		}
		
		System.out.println("Total Count "+ lineCount);
	}
}
