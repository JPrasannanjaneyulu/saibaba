package sai;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"src//test//resources//files//launch.feature", "src//test//resources//files//login.feature"})
public class Gmailrunner 
{
	
}
