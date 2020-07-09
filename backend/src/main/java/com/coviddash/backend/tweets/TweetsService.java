package com.coviddash.backend.tweets;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import twitter4j.*;

@Service
public class TweetsService {
  @Autowired
  private Twitter twitter;

  public List<String> searchTweets(String queryString) {
    try {
      Query query = new Query(queryString);
      query.count(25);
      query.resultType(Query.ResultType.recent);
      QueryResult result = twitter.search(query);

      return result
          .getTweets()
          .stream()
          .map(item -> item.getText())
          .collect(Collectors.toList());
    }
    catch (TwitterException e) {
      throw new RuntimeException(e);
    }
  }
}