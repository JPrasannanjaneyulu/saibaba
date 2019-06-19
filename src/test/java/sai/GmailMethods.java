package sai;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GmailMethods 
{
	WebDriver driver;
	
	@Given("^navigate to gmail using chrome browser$")
	public void method1() throws InterruptedException
	{
		System.setProperty("webdriver.chrome.driver", "D:\\batch229\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.gmail.com");
		Thread.sleep(5000);
	}
	
	@When("^enter userid as \"(.*)\" and click next$")
	public void method2(String x) throws Exception
	{
		driver.findElement(By.name("identifier")).sendKeys(x);
		driver.findElement(By.xpath("//*[text()='Next']")).click();
		Thread.sleep(5000);
	}
	
	@Then("^password should be displayed$")
	public void method3() throws InterruptedException
	{
		if(driver.findElement(By.name("password")).isDisplayed())
		{
			System.out.println("Userid is correct");
		}
		else
		{
			System.out.println("Userid is wrong");
		}
		Thread.sleep(5000);
	}
	
	@Then("^close site$")
	public void method4()
	{
		driver.quit();
	}
}
