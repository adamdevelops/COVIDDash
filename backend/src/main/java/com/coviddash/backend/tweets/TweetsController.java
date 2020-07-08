package com.coviddash.backend.tweets;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/tweets")
public class TweetsController {
  @Autowired
  private TweetsService tweetsService;

  @GetMapping
  public List<String> getTweets() {
    String query = "from:CNN coronavirus";
    List<String> tweets = tweetsService.searchTweets(query);

    return tweets;
  }
}
