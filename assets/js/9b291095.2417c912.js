"use strict";(self.webpackChunksptechblogs=self.webpackChunksptechblogs||[]).push([[4236],{586:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/go_to_resource-822a3174c0c32f822be4427f42914682.png"},1485:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var i=s(5321),r=s(4848),t=s(8453);const l={slug:"publish-react-app-to-azure-static-web-app-using-azure-devops",title:"How to Publish Your React App on Azure Static Web App Using Azure CI/CD",description:"Step-by-step guide to deploy a React app to Azure Static Web Apps using Azure DevOps Repos and Pipelines \u2014 without using GitHub. Ideal for beginners with simple language and clear instructions.",authors:"shivam-pawar",tags:["React","Vite","Azure","DevOps","Static Web Apps","SWA","CI/CD","Azure Repos","Azure Pipelines"]},a="How to Publish Your React App on Azure Static Web App Using Azure CI/CD",o={authorsImageUrls:[void 0]},p=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1: Push Your Code to Azure Repos",id:"step-1-push-your-code-to-azure-repos",level:2},{value:"Step 2: Create a Static Web App on Azure",id:"step-2-create-a-static-web-app-on-azure",level:2},{value:"Step 3: Set Up Azure Pipeline for CI/CD",id:"step-3-set-up-azure-pipeline-for-cicd",level:2},{value:"Step 4: Add Deployment Token to Pipeline",id:"step-4-add-deployment-token-to-pipeline",level:2},{value:"Final <code>azure-pipelines.yml</code> File (With Token Variable Group)",id:"final-azure-pipelinesyml-file-with-token-variable-group",level:2},{value:"Step 5: Access Your Live Web App",id:"step-5-access-your-live-web-app",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Are you building a React app and want to publish it using Azure? This guide will walk you through deploying your React app to ",(0,r.jsx)(n.strong,{children:"Azure Static Web Apps"})," using ",(0,r.jsx)(n.strong,{children:"Azure DevOps Repos"})," and ",(0,r.jsx)(n.strong,{children:"Azure Pipelines"})," \u2014 without GitHub."]}),"\n",(0,r.jsx)(n.p,{children:"Even if you're a beginner, don\u2019t worry. I\u2019ll guide you step-by-step, just like a teacher explaining things in a classroom. \ud83d\ude0a"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,r.jsx)(n.p,{children:"Before we begin, make sure you have the following:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"A React App"})," (using Vite for fast development)"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm create vite@latest\r\ncd <your_app_name>\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Azure Account"}),(0,r.jsx)(n.br,{}),"\n","Sign up for free: ",(0,r.jsx)(n.a,{href:"https://azure.microsoft.com/free",children:"https://azure.microsoft.com/free"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Azure DevOps Account"}),(0,r.jsx)(n.br,{}),"\n","Create one at: ",(0,r.jsx)(n.a,{href:"https://dev.azure.com",children:"https://dev.azure.com"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"step-1-push-your-code-to-azure-repos",children:"Step 1: Push Your Code to Azure Repos"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to ",(0,r.jsx)(n.a,{href:"https://dev.azure.com",children:"https://dev.azure.com"})]}),"\n",(0,r.jsxs)(n.li,{children:["Create a ",(0,r.jsx)(n.strong,{children:"new project"})]}),"\n",(0,r.jsxs)(n.li,{children:["Navigate to ",(0,r.jsx)(n.strong,{children:"Repos"})," > ",(0,r.jsx)(n.strong,{children:"Clone"})," and copy the Git URL"]}),"\n",(0,r.jsx)(n.li,{children:"In your terminal, run the following commands:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'git init\r\ngit remote add origin https://dev.azure.com/YOUR_ORG/YOUR_PROJECT/_git/YOUR_REPO\r\ngit add .\r\ngit commit -m "Initial commit"\r\ngit push -u origin main\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"step-2-create-a-static-web-app-on-azure",children:"Step 2: Create a Static Web App on Azure"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to the ",(0,r.jsx)(n.a,{href:"https://portal.azure.com",children:"Azure Portal"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Search for ",(0,r.jsx)(n.strong,{children:"Static Web Apps"})," and click ",(0,r.jsx)(n.strong,{children:"Create"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Search Static Web Apps",src:s(5915).A+"",title:"Search Static Web Apps",width:"637",height:"581"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fill out the form:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Subscription"}),": Choose your Azure subscription"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Resource Group"}),": Create or select an existing one"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Name"}),": Enter a unique name"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Region"}),": Pick a region near your users"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Deployment Details"}),": Choose ",(0,r.jsx)(n.strong,{children:"Other"})," for source control"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Review and Create",src:s(2452).A+"",title:"Review and Create",width:"732",height:"904"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Review + Create"})," and then ",(0,r.jsx)(n.strong,{children:"Create"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Create Static Web App",src:s(6597).A+"",title:"Create Static Web App",width:"622",height:"904"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Once deployed, click ",(0,r.jsx)(n.strong,{children:"Go to Resource"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Go to Resource",src:s(586).A+"",title:"Go to Resource",width:"1383",height:"484"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"step-3-set-up-azure-pipeline-for-cicd",children:"Step 3: Set Up Azure Pipeline for CI/CD"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"In Azure DevOps, go to your project"}),"\n",(0,r.jsxs)(n.li,{children:["Click on ",(0,r.jsx)(n.strong,{children:"Pipelines"})," > ",(0,r.jsx)(n.strong,{children:"Create Pipeline"})]}),"\n",(0,r.jsxs)(n.li,{children:["Choose ",(0,r.jsx)(n.strong,{children:"Azure Repos Git"})," as your source"]}),"\n",(0,r.jsx)(n.li,{children:"Select your repo"}),"\n",(0,r.jsxs)(n.li,{children:["Choose ",(0,r.jsx)(n.strong,{children:"Starter Pipeline"})," and replace the YAML with:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"trigger:\r\n  branches:\r\n    include:\r\n      - master\r\n      - main\r\n\r\npool:\r\n  vmImage: ubuntu-latest\r\n\r\nsteps:\r\n  - task: NodeTool@0\r\n    inputs:\r\n      versionSpec: '22.x'\r\n    displayName: 'Install Node.js'\r\n\r\n  - script: |\r\n      npm install\r\n      npm run build\r\n    displayName: 'Build React App'\r\n\r\n  - task: AzureStaticWebApp@0\r\n    inputs:\r\n      app_location: '/'\r\n      output_location: 'dist'\r\n      azure_static_web_apps_api_token: $(deployment_token)\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save and run"})]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"step-4-add-deployment-token-to-pipeline",children:"Step 4: Add Deployment Token to Pipeline"}),"\n",(0,r.jsx)(n.p,{children:"The deployment token authorizes your pipeline to deploy to Azure."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the Azure Portal, open your ",(0,r.jsx)(n.strong,{children:"Static Web App"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Under ",(0,r.jsx)(n.strong,{children:"Settings"}),", click ",(0,r.jsx)(n.strong,{children:"Manage Deployment Token"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Manage Deployment Token",src:s(4008).A+"",title:"Manage Deployment Token",width:"1005",height:"456"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Copy the token"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In Azure DevOps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to ",(0,r.jsx)(n.strong,{children:"Pipelines"})," > ",(0,r.jsx)(n.strong,{children:"Library"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a new ",(0,r.jsx)(n.strong,{children:"Variable Group"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add a variable:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Name"}),": ",(0,r.jsx)(n.code,{children:"deployment_token"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Value"}),": ",(0,r.jsx)(n.em,{children:"Paste the token you copied"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Keep this value secret"}),": \u2714\ufe0f"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Create Variable Group",src:s(7979).A+"",title:"Create Variable Group",width:"1327",height:"606"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Link this variable group to your pipeline by adding it to your YAML file:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"variables:\r\n  - group: <YOUR_VARIABLE_GROUP_NAME>\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h2,{id:"final-azure-pipelinesyml-file-with-token-variable-group",children:["Final ",(0,r.jsx)(n.code,{children:"azure-pipelines.yml"})," File (With Token Variable Group)"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"trigger:\r\n  branches:\r\n    include:\r\n      - master\r\n      - main\r\n\r\npool:\r\n  vmImage: ubuntu-latest\r\n\r\nvariables:\r\n  - group: react-vite-app\r\n\r\nsteps:\r\n  - task: NodeTool@0\r\n    inputs:\r\n      versionSpec: '22.x'\r\n    displayName: 'Install Node.js'\r\n\r\n  - script: |\r\n      npm install\r\n      npm run build\r\n    displayName: 'Build React App'\r\n\r\n  - task: AzureStaticWebApp@0\r\n    inputs:\r\n      app_location: '/'\r\n      output_location: 'dist'\r\n      azure_static_web_apps_api_token: $(deployment_token)\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u2139\ufe0f  With the ",(0,r.jsx)(n.code,{children:"trigger"})," configuration, the pipeline will automatically run every time new code is pushed to the ",(0,r.jsx)(n.code,{children:"main"})," or ",(0,r.jsx)(n.code,{children:"master"})," branch."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"step-5-access-your-live-web-app",children:"Step 5: Access Your Live Web App"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to the ",(0,r.jsx)(n.a,{href:"https://portal.azure.com",children:"Azure Portal"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Open your ",(0,r.jsx)(n.strong,{children:"Static Web App"})," resource"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Copy the ",(0,r.jsx)(n.strong,{children:"URL"})," from the overview page"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Open Deployed App",src:s(9213).A+"",title:"Open Deployed App",width:"1764",height:"413"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Open the URL in your browser to see your deployed React app live! \ud83c\udf89"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(n.p,{children:"Here's a recap of what you did:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Created and pushed a React app to Azure Repos"}),"\n",(0,r.jsx)(n.li,{children:"Created a Static Web App on Azure"}),"\n",(0,r.jsx)(n.li,{children:"Set up a CI/CD pipeline using Azure Pipelines"}),"\n",(0,r.jsx)(n.li,{children:"Used a secure deployment token to publish your app"}),"\n",(0,r.jsx)(n.li,{children:"Launched and verified your deployed site"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You\u2019ve now published your first React app to Azure without using GitHub! Keep building, keep exploring."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"If you found this article useful, please share it with your friends and colleagues!\u2764\ufe0f"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Read more articles on \u27a1\ufe0f ",(0,r.jsx)(n.a,{href:"https://dev.to/shivampawar",children:"Dev.To"})]}),"\n",(0,r.jsx)(n.p,{children:"Follow me on \u2935\ufe0f"}),"\n",(0,r.jsxs)("p",{align:"left",children:[(0,r.jsx)("a",{href:"https://dev.to/shivampawar",children:(0,r.jsx)("img",{src:"https://skillicons.dev/icons?i=devto"})}),(0,r.jsx)(n.p,{children:"\xa0\xa0"}),(0,r.jsx)("a",{href:"https://www.linkedin.com/in/shivam-prakash-pawar",children:(0,r.jsx)("img",{src:"https://skillicons.dev/icons?i=linkedin"})}),(0,r.jsx)(n.p,{children:"\xa0\xa0"}),(0,r.jsx)("a",{href:"https://github.com/shivam-pawar",children:(0,r.jsx)("img",{src:"https://skillicons.dev/icons?i=github"})})]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},2452:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/review_create-ed0049b9b71d768bda5c420b12b9101d.png"},4008:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/manage_deployment_token-4cf23bffdf61f124d354173ad4447638.png"},5321:e=>{e.exports=JSON.parse('{"permalink":"/sptechblogs/blog/publish-react-app-to-azure-static-web-app-using-azure-devops","editUrl":"https://github.com/shivam-pawar/sptechblogs/tree/master/blog/2025-04-06-deploy-react-app-on-azure-swa.md","source":"@site/blog/2025-04-06-deploy-react-app-on-azure-swa.md","title":"How to Publish Your React App on Azure Static Web App Using Azure CI/CD","description":"Step-by-step guide to deploy a React app to Azure Static Web Apps using Azure DevOps Repos and Pipelines \u2014 without using GitHub. Ideal for beginners with simple language and clear instructions.","date":"2025-04-06T00:00:00.000Z","tags":[{"inline":true,"label":"React","permalink":"/sptechblogs/blog/tags/react"},{"inline":true,"label":"Vite","permalink":"/sptechblogs/blog/tags/vite"},{"inline":true,"label":"Azure","permalink":"/sptechblogs/blog/tags/azure"},{"inline":true,"label":"DevOps","permalink":"/sptechblogs/blog/tags/dev-ops"},{"inline":true,"label":"Static Web Apps","permalink":"/sptechblogs/blog/tags/static-web-apps"},{"inline":true,"label":"SWA","permalink":"/sptechblogs/blog/tags/swa"},{"inline":true,"label":"CI/CD","permalink":"/sptechblogs/blog/tags/ci-cd"},{"inline":true,"label":"Azure Repos","permalink":"/sptechblogs/blog/tags/azure-repos"},{"inline":true,"label":"Azure Pipelines","permalink":"/sptechblogs/blog/tags/azure-pipelines"}],"readingTime":3.635,"hasTruncateMarker":true,"authors":[{"name":"Shivam Pawar","title":"Senior Software Developer @Bridgenext","url":"https://github.com/shivam-pawar/","socials":{"github":"https://github.com/shivam-pawar","linkedin":"https://www.linkedin.com/in/shivam-prakash-pawar/"},"imageURL":"https://github.com/shivam-pawar.png","key":"shivam-pawar","page":null}],"frontMatter":{"slug":"publish-react-app-to-azure-static-web-app-using-azure-devops","title":"How to Publish Your React App on Azure Static Web App Using Azure CI/CD","description":"Step-by-step guide to deploy a React app to Azure Static Web Apps using Azure DevOps Repos and Pipelines \u2014 without using GitHub. Ideal for beginners with simple language and clear instructions.","authors":"shivam-pawar","tags":["React","Vite","Azure","DevOps","Static Web Apps","SWA","CI/CD","Azure Repos","Azure Pipelines"]},"unlisted":false,"prevItem":{"title":"Practice JavaScript for Interview","permalink":"/sptechblogs/blog/practice-javascript-for-interview"},"nextItem":{"title":"Improve your JavaScript Code Part - 1","permalink":"/sptechblogs/blog/improve-your-js-code-part-1"}}')},5915:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/static_web_app_search-fb9081b88fac9c2da2f21e769f68f946.png"},6597:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/create_swa-1239f3660cfee56a06e08feaba967843.png"},7979:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/variable_group-1571ca5c21cbd172a41cf188fa5f1a30.png"},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var i=s(6540);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}},9213:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/open_url-da5d014fbda5c28a1e17d998ca38d5a7.png"}}]);