package utils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Utilities {
	private static Pattern pageViewsPattern = null;
	
	public static boolean isRelatedLogLine(String logLine, LogTypes logType){
		Pattern pattern = getPattern(logType);
		Matcher matcher = pattern.matcher(logLine);
		return matcher.matches();
	}
	
	private static Pattern getPattern(LogTypes logType){
	    String regexPatternStringForPageView = "\\d*\\s-\\s-\\s\\[.*\\]\\s\\\"GET\\s/(english|french)/.*\\.(htm|html)\\s.*";
		
		switch (logType) {
		
		case PAGE_VIEWS:
			if (pageViewsPattern == null){
				pageViewsPattern = Pattern.compile(regexPatternStringForPageView);
			}	
			return pageViewsPattern;
			
		default:
			return null;
		
		}
	}

}
