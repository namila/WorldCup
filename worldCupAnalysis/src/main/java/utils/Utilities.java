package utils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Utilities {
	private static String regexPatternStringForPageView = "\\d*\\s-\\s-\\s\\[.*\\]\\s\\\"GET\\s/(english|french)/.*\\.(htm|html)\\s.*";
	private static Pattern pageViewsPattern = null;
	
	private static String regexPatternForPageViewUrlSection = "\".*\"";
	private static Pattern pageViewUrlSectionPattern = null;
	
	public static boolean isRelatedLogLine(String logLine, LogTypes logType){
		Pattern pattern = getPattern(logType);
		Matcher matcher = pattern.matcher(logLine);
		return matcher.matches();
	}
	
	public static String getUserId(String logLine){
		String userId = logLine.split(" ")[0];
		return userId;
	}
	
	public static String getLogUrl(String logLine){
		if(pageViewUrlSectionPattern == null){
			pageViewUrlSectionPattern = Pattern.compile(regexPatternForPageViewUrlSection);
		}
		
		Matcher matcher = pageViewUrlSectionPattern.matcher(logLine);
		matcher.find();
		String urlPart = matcher.group();
		return urlPart.split(" ")[1];
		
	}
	
	private static Pattern getPattern(LogTypes logType){ 
		
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
