'use client';
import { useState } from "react";

export default function Home() {
  const[prevy, setprev] =useState("");
  const [currentTab, setCurrentTab] = useState(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    postcode: "",
    skill:"",
    skills: [],
    experience: [],
    education:[],

  });
  const [experienceobj, setExp] = useState({
    role:"",
    company:"",
    start:"",
    end:"",
    jobDesc:""
  });
  const [educationobj, setEdu] = useState({
    subject:"",
    grade:"",
    start:"",
    end:"",
    school:""
  });

  const tabs = [
    {
      title: "Name",
      content: (
        <>
          <div class="Frame1 w-[560px] h-[214px] top-[550px] left-[390px] relative z-10">
            <div class="WhatSYourName left-[41px] top-0 absolute text-center text-black text-[28px] font-semibold font-['Open Sans']">What’s your name?</div>
            <div class="Firstn w-[555px] h-[70px] left-[40px] top-[56px] absolute">
              <input 
                class="shadow appearance-none border rounded w-[300px] py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="fname" 
                type="text" 
                name="firstName"
                placeholder="First Name" 
                value={formValues.firstName} 
                onChange={handleInputChange} 
              />
            </div>
            <div class="Lastn w-[560px] h-[70px] left-[40px] top-[144px] absolute">
              <input 
                class="shadow appearance-none border rounded w-[300px] py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="lname" 
                type="text" 
                name="lastName"
                placeholder="Last Name" 
                value={formValues.lastName} 
                onChange={handleInputChange} 
              />
            </div>
          </div>
        </>
      ),
    },   
    {
      title: "location",
      content: (
        <>
          <div class="Frame1 w-[560px] h-[214px] top-[550px] left-[390px] relative z-10">
            <div class="WhatSYourName left-[41px] top-0 absolute text-center text-black text-[28px] font-semibold font-['Open Sans']">Where are you based?</div>
            <div class="Firstn w-[555px] h-[70px] left-[40px] top-[56px] absolute">
              <input 
                class="shadow appearance-none border rounded w-[300px] py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="pcode" 
                type="text" 
                name="postcode" 
                placeholder="Postcode/ZIP" 
                value={formValues.postcode} 
                onChange={handleInputChange} 
              />
            </div>
          </div>
        </>
      ),
    },
    {
      title: "skills",
      content: (
        <>
          <div class="relative z-10 w-[560px] h-[214px] top-[550px] left-[390px]">
            <div class="absolute left-[41px] top-0 text-center text-black text-[28px] font-semibold font-['Open Sans']">
              What are your skills?
            </div>
            <div class="absolute left-[40px] top-[56px] w-[555px] h-[70px]">
              <input
                class="shadow appearance-none border rounded w-[300px] py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="sk"
                type="text"
                name="skill"
                placeholder="Skills"
                value={formValues.skill}
                onChange={handleInputChange}
              />
              <button
                class="relative top-3 left-5 w-[35px] h-[33px]"
                type="button"
                id="subsk"
                name="subsk"
                onClick={handleSkillChange}
              >
                <div class="absolute w-[35px] h-[33px] bg-[#5ad8fa] rounded-full"></div>
                <div class="absolute w-5 h-[3px] left-[6px] top-[14px] bg-white origin-top-left rotate-[-15deg]"></div>
                <div class="absolute text-white text-[28px] font-normal font-['Pavanam'] left-[8px] top-[31px] origin-top-left rotate-[-127deg]">
                  T
                </div>
                <div class="absolute w-5 h-[3px] left-[13px] top-[25px] bg-white origin-top-left rotate-[-52deg]"></div>
              </button>
            </div>
            <div class="absolute left-[30px] top-[120px] overflow-auto w-[650px] h-[300px] flex flex-wrap">
              {formValues.skills.map((skil, index) => {
                const rectangleWidth = skil.length * 15; // Calculate width dynamically
      
                return (
                  <div class="relative flex items-center h-[42px] bg-[#3994fd] rounded-[14px] mb-2" key={index} style={{ width: `${rectangleWidth + 50}px` }}>  {/* Flex container with dynamic width */}
                    <span class="text-white text-[28px] font-normal font-['Pavanam'] px-3">{skil}</span> {/* Skill text */}
                    <button
                      value={index}
                      key={index}
                      type="button"
                      id="del"
                      onClick={() => handleSkillDelete(index)}
                      class="ml-auto mr-2 text-white text-[24px] font-normal font-['Pavanam']"
                    >
                      X
                    </button> {/* X button */}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ),
      
      
    },
    {
      title: "exp",
      content: (
        <>
          <div class="Frame1 w-[560px] h-[214px] top-[550px] left-[390px] relative z-10">
            <div class="WhatSYourName left-[41px] top-0 absolute text-center text-black text-[28px] font-semibold font-['Open Sans']">What experience do you have?</div>
            <div class="Firstn w-[555px] h-[70px] left-[40px] top-[56px] absolute flex flex-col">
              <input 
                class="shadow appearance-none border rounded w-[160px] py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="r" 
                type="text" 
                name="role" 
                placeholder="Role" 
                value={experienceobj.role} 
                onChange={handleExpChange} 
              />
              <input 
                class="shadow appearance-none border rounded w-[170px] py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="c" 
                type="text" 
                name="company" 
                placeholder="Company" 
                value={experienceobj.company} 
                onChange={handleExpChange} 
              />
              <div class='flex-wrap flex'>
              <input 
                class="shadow appearance-none border rounded w-[100px] py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="s" 
                type="text" 
                name="start" 
                placeholder="Start Date" 
                value={experienceobj.start} 
                onChange={handleExpChange} 
              />
              <input 
                class="shadow appearance-none border rounded w-[100px] py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="e" 
                type="text" 
                name="end" 
                placeholder="End Date" 
                value={experienceobj.end} 
                onChange={handleExpChange} 
              />
              </div>
              <input 
                class="shadow appearance-none border rounded w-[600px] min-h-[150px] py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="j" 
                type="text" 
                name="jobDesc" 
                placeholder="Job Description" 
                value={experienceobj.jobDesc} 
                onChange={handleExpChange} 
              />
              <button 
                type="button"
                id="subexp"
                name="subexp"
                onClick={handleExpSubmit} class="Rectangle7 w-[84px] h-[25px] bg-[#0057bb] rounded-[5px]">Submit</button>
            </div>
          </div>
          <div class="absolute  overflow-auto w-[650px] h-[800px] flex flex-col z-100">
          {formValues.experience.map((exp, index) => {
            console.log(exp.role)
            console.log(exp.company)
            console.log(exp.start)
            console.log(exp.end)
            console.log(exp.jobDesc)
            return(
              <div key='index ' class='w-[600px] h-[500px]' >
                <div class="Role left-[410px] top-[276px] absolute text-center text-black text-[32px] font-normal font-['Inter']">{exp.role}</div>
                <div class="Company left-[408px] top-[315px] absolute text-center text-black text-2xl font-normal font-['Inter']">{exp.company}</div>
                <div class="StartDate left-[410px] top-[352px] absolute text-center text-black text-sm font-normal font-['Inter']">{exp.start}</div>
                <div class="EndDate left-[486px] top-[352px] absolute text-center text-black text-sm font-normal font-['Inter']">{exp.end}</div>
                <div class="YouGainedFromIt w-[418px] h-[87px] left-[411px] top-[388px] absolute text-black text-xs font-normal font-['Inter']">This is as job description. This is where you taslk about what you did during youyr job such ats the tasks you did, the accomplishments you aschieved, and what you gained from it</div>
                <div class=" left-[477px] top-[352px] absolute text-center text-black text-sm font-normal font-['Inter']">-</div>
                <div class="Rectangle11 w-[616px] h-1 left-[409px] top-[440px] absolute bg-[#d9d9d9]"></div>
              </div>
              
          );
          })}
          </div>
          
        </>
      ),
    },
    {
      title: "edu",
      content: (
        <>
          <p><input name="educations" value={educationobj.subject} onChange={handleInputChange} placeholder="Subject..."/></p>
          <p><input name="educationg" value={educationobj.grade} onChange={handleInputChange} placeholder="Grade/Degree..."/></p>
          <p><input name="educationst" value={educationobj.start} onChange={handleInputChange} placeholder="Start Date..."/></p>
          <p><input name="educatione" value={educationobj.end} onChange={handleInputChange} placeholder="End Date..."/></p>
          <p><input name="educationsch" value={educationobj.school} onChange={handleInputChange} placeholder="School/College/University..."/></p>
        </>
      ),
    },
  ];

  // Handle input change
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleExpChange(e) {
    const { name, value } = e.target;
    setExp((prev) => ({ ...prev, [name]: value }));
    
  }

  function handleExpSubmit(){
    let arr = formValues.experience
    arr.push(experienceobj)
    setFormValues(prev =>({
      ...prev,
      experience:arr
    }))
  }

  function handleSkillChange(e){
    let arr = formValues.skills
    arr.push(formValues.skill)
    setFormValues(prev =>({
      ...prev,
      skills:arr
    }))
  }

  function handleSkillDelete(i){
    let arr = formValues.skills
    delete arr[i]
    setFormValues(prev =>({
      ...prev,
      skills:arr
    }))
  }

  // Show the tab content
  function showTab(n) {
    return tabs[n].content;
  }

  // Handle next/previous functionality
  function nextPrev(n) {
    /*if (n === 1 && !validateForm()) {
      return;}*/
    setCurrentTab((prev) => prev + n);
  }

  // Validate form fields
  function validateForm() {
  }

  /*function prevNext(n){
    
    nextPrev(n)
    if(currentTab===0){
      setprev("Rectangle5 w-[163px] h-[66px] left-[454px] top-[761px] absolute bg-white rounded-[117px]")
    }
    else{
      setprev("Rectangle5 w-[163px] h-[66px] left-[454px] top-[761px] absolute bg-[#b6b6b6] rounded-[117px]")
    }
  }*/
  // Update button label
  const nextButtonLabel = currentTab === tabs.length - 1 ? "Submit" : "Next";

  return (
    <form id="regForm">

      <div className="tab" >
        {showTab(currentTab)}
      </div>
      <div class="Desktop1 w-full h-[1024px] relative bg-white z-0">
  <div class="Rectangle1 w-[646px] h-[741px] left-[397px] top-[141px] absolute bg-white rounded-[30px] shadow-xl  "></div>
  <div class="CreateYourProfile w-[1440px] left-0 top-[189px] absolute text-center text-[#0378ff] text-5xl font-bold font-['Open Sans']">Create your profile</div>
  <div class="Rectangle5 w-[163px] h-[66px] left-[454px] top-[761px] absolute bg-[#b6b6b6] rounded-[117px]"></div>
  <div class="Rectangle6 w-[163px] h-[66px] left-[817px] top-[758px] absolute bg-[#3b96ff] rounded-[117px]"></div>
  <button class="Next w-[74px] h-[38px] left-[862px] top-[772px] absolute text-center text-white text-[28px] font-regular font-['Open Sans']" type="button" id="nextBtn" onClick={() => nextPrev(1)}>Next</button>
  <button class="Previous w-[156px] h-[38px] left-[457px] top-[772px] absolute text-center text-white text-[28px] font-regular  font-['Open Sans']" type="button" id="prevBtn" onClick={() => nextPrev(-1)} disabled={currentTab === 0}>{currentTab===0? '' : 'Previous'}</button>
  </div>  
    </form>
  );
}
