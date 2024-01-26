# StackIt Hiring Assignment (Frontend Engineer)

### Welcome to StackIt's hiring assignment! 🚀

**If you didn't get here through github classroom, are you sure you're supposed to be here? 🤨**


We are glad to have you here, but before you read what you're going to beat your head over for the next few hours (maybe days?), let's get a few things straight:
- We really appreciate honesty. Don't copy anyone else's assignment, it'll only sabotage your chances :P
- You're free to use any stack, and library of your choice. Use whatever you can get your hands on, on the internet!
- We love out of the box solutions. We prefer to call it *Jugaad* 
- This might be just the first round, but carries the most importance of all. Give your best, and we hope you have a fun time solving this problem.

## ✨ **Problem Statement: Crafting a LIVE Report Builder for Google Sheets** ✨

**Context**:
Analysts worldwide 🌍 are constantly juggling massive amounts of data to extract meaningful insights for their organizations 📊. However, they often find themselves bogged down by the tedious process of manually creating reports. Imagine you are a data analyst at the Gov of India 🏦, who needs to keep a close eye on the changing air pollution trends in different cities. Their week involves sifting through heaps of data, creating visualizations, and preparing reports for taking very critical decisions. Unfortunately, much of their time is consumed in just setting up these reports, which hampers productivity and delays insights 😫.

**Today, you are going to make their lives better.**

**Problem Statement**:
Create a Webapp which is a Live Report Builder. It connects to any one live data source and allows analysts to easily construct customizable reports with various UI components. 
Here’s what you need to build:
1. Live Data Source Connection: Pick any api which provides live data. For simplicity you can pick the OpenWeatherMap APIs that provide you live Air Pollution data. This data source will be the input data for your report builder. More info here: https://openweathermap.org/api/air-pollution
2. Implement a USER INTERFACE that provides an experience to BUILD OUT A REPORT, each part having a core use case. <br>
   a. THE KNOBS TO BUILD A REPORT: The first part allows user to select the data source or sliced data or any other derivation of the data source that you need to begin with. It also includes the visualisations that the user can finally add to the report. For the simplicity of the implementation, support only 3 types of visualisations – Any summary data (Eg. The worst SO2 value in the last 30 days ), Tabular data (Eg. sliced data view of O3 trends in the last 2 weeks) and Charts (Bar or line graph - plot trends of CO levels week on week).<br>
   b. THE PREVIEW OF THE REPORT: The second part is where you visualise how the report is being build and generated.  
3. User can have multiple visualisations in the report along with any message they wish to add in the report.
4. Allow the user to set how frequently the data in the report should be updated from the apis.

![Dashboard](https://github.com/StackItHQ/Hiring-Assignment-Frontend/blob/main/dashboard-eg.jpg?raw=true)

You get brownie points 🍪 if you implement any innovative feature or components that enhance the tool's functionality. Your solution should not just be functional but also aesthetically appealing.

**Other areas to think on**:
- Don't invest a lot of time in integrating the API. The assignment is primarily designed to evaluate your frontend skills. Focus on the live report builder and how you can make it more intuitive to use.
- Feel free to take inspiration from other report builder tools or inspiration for the user interface from the internet. Hint: Checkout Appsmith or Retool.
  
## Submission ⏰
The timeline for this submission is: **Next 4 days**

Some things you might want to take care of:
- Make use of git and commit your steps!
- Use good coding practices.
- Write beautiful and readable code. Well-written code is nothing less than a work of art.
- Use semantic variable naming.
- Your code should be organized well in files and folders which is easy to figure out.
- If there is something happening in your code that is not very intuitive, add some comments.
- Add to this README at the bottom explaining your approach (brownie points 😋)

Make sure you finish the assignment a little earlier than this so you have time to make any final changes.

Once you're done, make sure you **record a video** showing your project working. The video should **NOT** be longer than 120 seconds. While you record the video, tell us about your biggest blocker, and how you overcame it! Don't be shy, talk us through, we'd love that.

We have a checklist at the bottom of this README file, which you should update as your progress with your assignment. It will help us evaluate your project.

- [ ] My code's working just fine! 🥳
- [ ] I have recorded a video showing it working and embedded it in the README ▶️
- [ ] I have tested all the normal working cases 😎
- [ ] I have even solved some edge cases (brownie points) 💪
- [ ] I added my very planned-out approach to the problem at the end of this README 📜

## Got Questions❓
Feel free to check the discussions tab, you might get something of help there. Check out that tab before reaching out to us. Also, did you know, the internet is a great place to explore? 😛

## Developer's Section
*Add your video here, and your approach to the problem (optional). Leave some comments for us here if you want, we will be reading this :)*
