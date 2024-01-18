<script>
export default{
  name:"Resume",
  data(){
    return {
      skills:[{
        name:"Python",
        year:3,
      },
      {
        name:"Java",
        year:2,
      },
      {
        name:"JS",
        year:1.5,
      },
      {
        name:"C++",
        year:1,
      },
],
      educations:[{
        degree:"计算机科学本科",
        school:"The University of Irvine, California",
        specilization:"智能系统",
        GPA:"3.87/4.0",
        graduate_data:"2023"
      }],
      description:`Results-oriented Full Stack Developer with a solid 
      background in computer science. Skilled in designing and implementing scalable software solutions,
       I bring expertise in both front-end and back-end development. Committed to staying 
       updated on emerging technologies to deliver innovative and efficient solutions.`,
      project_exps:[
        {
          name:"Management System",
          description:"Full stack web application",
          goals:[`基于前端Vue和后端Java Spring Boot的全栈开发,实现Controller, Service, DAO三层分工`,
                `使用云端阿里云存储OSS完成对象存储, SQLServer管理所有数据`,
                `使用JWT和filter chain拦截过滤请求来认证用户登陆`,
                `部署在Github`],
          skills:["Spring Boot", "VueJS", "Spring AOP", "JWT authentication","RestFul API","SQLServer","AliCloud OSS"]
        },
        {
          name:"CDog",
          description:"Full stack web application that supports image classification",
          goals:[`基于前端Vue和后端Flask 的全栈开发`,
                `提供了登录,创建账户,用户验证,上传图片文件的基本功能`,
                `由pre-trained CNN神经网络来提供图片识别并返回给前端,同时在本地服务器储存结果`,
                `解决CORS HTTPS请求问题,按照RestFUL API进行开发`],
          skills:["Flask", "SQLalchemy", "VueJS", "JWT authentication","RestFul API"]
        },
        {  
          name:"NLP ChatBot",
          description:"TeamBased NLP project",
          goals:[`代领小组设计并开发一个Seq2Seq GRU双向模型,
            以构建基于对话数据集的对话聊天机器人系统,数据集包括电视剧《绝命毒师》台词、
            Cornell电影数据集和 Reddit 收集的脚本`,
                `实现了数据的清理和读取，极大程度上减少了内存溢出问题`,
                `执行数据预处理、过滤、标记化、预训练嵌入和训练。
            使用训练数据集进行评估时获得了 0.89 BLEU 分数。模型能够完美地响应训练对话脚本`],
          skills:["Tensorflow", "Pytorch","Data preprocessing","BLEU Validation"]
        }
      ]

    }
  }
}
</script>

<template>
  <article class="resume dark:text-white">
    <div class="container">
      <div class="leftPanel">
        <img src="../assets/imgs/profile.jpeg"/>
        <div class="details">
          <div class="item bottomLineSeparator">
            <h2 class="dark:text-white">
              CONTACT
            </h2>
            <div class="smallText">
              <p class="dark:text-white"><i class="fa fa-phone contactIcon" aria-hidden="true"></i>xxx xxxx xxxx</p>
              <p class="dark:text-white"><i class="fa fa-envelope contactIcon" aria-hidden="true"></i></p>
              <p class="dark:text-white"><i class="fa fa-map-marker contactIcon" aria-hidden="true"></i>湖南, xx</p>
            </div>
          </div>
          <div class="item bottomLineSeparator">
            <h2 class="dark:text-white">
              SKILLS
            </h2>
            <div class="smallText">
              <div v-for="(skill, index) in this.skills" :key="index" class="skill">
                <div>
                  <span class="dark:text-white">{{ skill.name }}</span>
                </div>
                <div class="yearsOfExperience dark:text-white">
                  <span class="alignright">{{ skill.year }}</span>
                  <span class="alignleft">years</span>
                </div>
              </div>
            </div>
            
          </div>
          <div class="item">
            <h2 class="dark:text-white">
              EDUCATION
            </h2>
            <div class="smallText" v-for="(edu, index) in educations" :key="index">
              <p class="bolded white dark:text-white">{{edu.degree}}</p><p class="dark:text-white">{{edu.school}}</p><p class="dark:text-white">
                {{ edu.specilization }}</p><p class="dark:text-white">GPA: {{ edu.GPA }}</p><p class="dark:text-white">毕业于 {{ edu.graduate_data }}
              </p>
            </div>
          </div>
        </div>
        
      </div>


      <div class="rightPanel">
        <div>
          <h1 class="dark:text-white">
            Yueyang Xie
          </h1>
          <div class="smallText">
            <h3 class="dark:text-white">
              Full stack developer
            </h3>
          </div>
        </div>
        <div>
          <h2 class="dark:text-white">
            关于
          </h2>
          <div class="smallText">
            <p class="dark:text-white">
              {{ this.description }}
            </p>
          </div>
        </div>
        <div class="workExperience">
          <h2 class="dark:text-white">
            Project experience
          </h2>
          <ul>
            <li v-for="(project_exp,index) in project_exps" :key="index">
              <div class="jobPosition">
                <span class="bolded dark:text-white">
                  {{ project_exp.name }}
                </span>
              </div>
              <div class="projectName">
                <span class="dark:text-white">
                  {{ project_exp.description }}
                </span>
              </div>
              <div class="smallText dark:text-white">
                <ul>
                  <li  v-for="(goal, index) in  project_exp.goals" :key="index">
                    {{ goal }} 
                  </li>
                </ul>
                <p class="dark:text-white">
                  <span class="bolded">Skills: </span>{{ project_exp.skills.join(", ") }}
                </p>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>

  </article>
</template>

<style scoped>
/* Fonts */
/* Family */
h1 { 
  font-family: 'Julius Sans One', sans-serif;
}

h2 { /* Contact, Skills, Education, About me, Work Experience */
  font-family: 'Archivo Narrow', sans-serif;
}

h3 { /* Accountant */
  font-family: 'Open Sans', sans-serif;
}

.jobPosition span, 
.projectName span {
  font-family: 'Source Sans Pro', sans-serif;
}


.smallText, 
.smallText span, 
.smallText p, 
.smallText a {
  font-family: 'Source Sans Pro', sans-serif;
  text-align: justify;
}

/* End Family */

/* Colors */
h1 { 
  color: #111; 
}

.leftPanel, 
.leftPanel a {
  color: #bebebe;
  text-decoration: none;
}

.leftPanel h2 {
  color: white;
}

/* End Colors */

/* Sizes */
h1 { 
  font-weight: 300; 
  font-size: 1.2cm;
  transform:scale(1,1.15); 
  margin-bottom: 0.2cm;
  margin-top: 0.2cm;
  text-transform: uppercase; 
}

h2 {
  margin-top: 0.1cm;
  margin-bottom: 0.1cm;
}

.leftPanel, 
.leftPanel a {
  font-size: 0.38cm;
}

.projectName span, 
.jobPosition span {
  font-size: 0.35cm;
}

.smallText, 
.smallText span, 
.smallText p, 
.smallText a {
  font-size: 0.35cm;
}

.leftPanel .smallText, 
.leftPanel .smallText, 
.leftPanel .smallText span, 
.leftPanel .smallText p, 
.smallText a {
  font-size: 0.45cm;
}

.contactIcon {
  width: 0.5cm;
  text-align: center;
}

/* p {
  margin-top: 0.05cm;
  margin-bottom: 0.05cm;
} */
/* End Sizes */

.bolded {
  font-weight: bold;
}

.white {
  color: white;
}
/* End Fonts */

/* Layout */
body {
  background: rgb(204,204,204); 
  width: 21cm;
  height: 29.7cm;
  margin: 0 auto;
}

/* Printing */
page {
  background: white;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
}

page[size="A4"] {  
  width: 21cm;
  height: 29.7cm; 
}

@page {
   size: 21cm 29.7cm;
   padding: 0;
   margin: 0mm;
   border: none;
   border-collapse: collapse;
}
/* End Printing */

.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

.leftPanel {
  width: 27%;
  background-color: #484444;
  padding: 0.7cm;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rightPanel {
  width: 73%;
  padding: 0.7cm;
}

.leftPanel img {
  width: 4cm;
  height: 4cm;
  margin-bottom: 0.7cm;
  border-radius: 50%;
  border: 0.15cm solid white;
  object-fit: cover;
  object-position: 50% 50%;
}

.leftPanel .details {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.skill {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.bottomLineSeparator {
  border-bottom: 0.05cm solid white;
}

.yearsOfExperience {
  width: 1.6cm;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.alignleft {
  text-align: left !important;
  width: 1cm;
}

.alignright {
  text-align: right !important;
  width: 0.6cm;
  margin-right: 0.1cm
}

.workExperience>ul {
  list-style-type: none;
  padding-left: 0;
}

.workExperience>ul>li {
  position: relative;
  margin: 0;
  padding-bottom: 0.5cm;
  padding-left: 0.5cm;
}

.workExperience>ul>li:before {
  background-color: #b8abab;
  width: 0.05cm;
  content: '';
  position: absolute;
  top: 0.1cm;
  bottom: -0.2cm; /* change this after border removal */
  left: 0.05cm;
}

.workExperience>ul>li::after {
  content: '';
  position: absolute;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 32 32' focusable='false'%3E%3Ccircle stroke='none' fill='%23484444' cx='16' cy='16' r='10'%3E%3C/circle%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: contain;
  left: -0.09cm;
  top: 0;
  width: 0.35cm;
  height: 0.35cm;
}

.jobPosition {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.item {
  padding-bottom: 0.7cm;
  padding-top: 0.7cm;
}

.item h2{
  margin-top: 0;
}

.workExperience>ul>li ul {
  padding-left: 0.5cm;
  list-style-type: disc;
}
/*End Layout*/

</style>