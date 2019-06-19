package sai;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features={"src//test//resources//files//launch1.feature", "src//test//resources//files//login1.feature"}, tags={"~@prasanna", "@rama"}, plugin={"pretty", "html:target//subfolder"})
public class Gmailrunner3 
{
	
}
