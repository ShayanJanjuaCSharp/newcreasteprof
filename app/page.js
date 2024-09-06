'use client';
import { useState } from "react";

export default function Home() {
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
          <input class="shadow appearance-none border rounded w-[300px] py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="First Name"/>
          </div>
          <div class="Lastn w-[560px] h-[70px] left-0 top-[144px] absolute">
            <div class="Rectangle3 w-[519px] h-[70px] left-[41px] top-0 absolute opacity-25 bg-[#d9d9d9] rounded-[26px]"></div>
          <div class="LastName w-[307px] h-[41px] left-0 top-[15px] absolute text-center text-[#909090] text-[32px] font-normal font-['Open Sans']">Last Name...</div>
          </div>
        </div>
        </>
      ),
    },
    {
      title: "location",
      content: (
        <>
          <p><input name="postcode" value={formValues.postcode} onChange={handleInputChange} placeholder="Postcode..." /></p>
        </>
      ),
    },
    {
      title: "skills",
      content: (
        <>
          
          <p><input name="skill" value={formValues.skill} onChange={handleInputChange} placeholder="Enter your skills..." /></p>
        </>
      ),
    },
    {
      title: "exp",
      content: (
        <>
          <p><input name="experiencer" value={experienceobj.role} onChange={handleInputChange} placeholder="Job Role..."/></p>
          <p><input name="experiencec" value={experienceobj.company} onChange={handleInputChange} placeholder="Company..."/></p>
          <p><input name="experiences" value={experienceobj.start} onChange={handleInputChange} placeholder="Start Date..."/></p>
          <p><input name="experiencee" value={experienceobj.end} onChange={handleInputChange} placeholder="End Date..."/></p>
          <p><input name="experiencej" value={experienceobj.jobDesc} onChange={handleInputChange} placeholder="Job Description..."/></p>
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

  // Show the tab content
  function showTab(n) {
    return tabs[n].content;
  }

  // Handle next/previous functionality
  function nextPrev(n) {
    if (n === 1 && !validateForm()) return;
    setCurrentTab((prev) => prev + n);
  }

  // Validate form fields
  function validateForm() {
    const tabFields = Object.values(formValues).slice(currentTab * 2, (currentTab + 1) * 2);
    return tabFields.every((value) => value!== "");
  }

  // Update button label
  const nextButtonLabel = currentTab === tabs.length - 1 ? "Submit" : "Next";

  return (
    <form id="regForm">

      <div className="tab" >
        {showTab(currentTab)}
      </div>
      <div class="Desktop1 w-full h-[1024px] relative bg-white z-0">
  <div class="Rectangle1 w-[646px] h-[741px] left-[397px] top-[141px] absolute bg-white rounded-[82px] shadow-2xl"></div>
  <div class="CreateYourProfile w-[1440px] left-0 top-[189px] absolute text-center text-[#0378ff] text-5xl font-bold font-['Open Sans']">Create your profile</div>
  <div class="Rectangle5 w-[163px] h-[66px] left-[454px] top-[761px] absolute bg-[#b6b6b6] rounded-[117px]"></div>
  <div class="Rectangle6 w-[163px] h-[66px] left-[817px] top-[758px] absolute bg-[#3b96ff] rounded-[117px]"></div>
  <div class="Next w-[74px] h-[38px] left-[862px] top-[772px] absolute text-center text-white text-[28px] font-regular font-['Open Sans']">Next</div>
  <div class="Previous w-[156px] h-[38px] left-[457px] top-[772px] absolute text-center text-white text-[28px] font-regular  font-['Open Sans']">Previous</div>
</div>  
      
    

      {/* Navigation Buttons 
      <div style={{ overflow: "auto" }}>
        <div style={{ float: "right" }}>
          <button type="button" id="prevBtn" onClick={() => nextPrev(-1)} disabled={currentTab === 0}>
            Previous
          </button>
          <button type="button" id="nextBtn" onClick={() => nextPrev(1)}>
            {nextButtonLabel}
          </button>
        </div>
      </div>

      {/* Step Indicators 
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        {tabs.map((_, i) => (
          <span key={i} className={`step ${currentTab === i ? "active" : ""}`}></span>
        ))}
      </div>*/}
    </form>
  );
}
