package com.coviddash.backend;

import com.coviddash.backend.tweets.TweetsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;

@RestController
@RequestMapping("api/v1/test")
public class TestController {

    @Autowired
    private TweetsService tweetsService;

    @GetMapping
    public HashMap<String, String> getTest() {
        HashMap<String, String> response = new HashMap<>();
        response.put("message", "This is a test endpoint");

        return response;
    }
}
