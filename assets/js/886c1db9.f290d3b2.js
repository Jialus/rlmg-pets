"use strict";(self.webpackChunkrlmg_pets=self.webpackChunkrlmg_pets||[]).push([[7562],{6363:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"software/Projects/SCIOWA Cosmic Playlist App","title":"SCIOWA Cosmic Playlist App","description":"Requirements","source":"@site/docs/software/Projects/SCIOWA Cosmic Playlist App.md","sourceDirName":"software/Projects","slug":"/software/Projects/SCIOWA Cosmic Playlist App","permalink":"/rlmg-pets/docs/software/Projects/SCIOWA Cosmic Playlist App","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"softwareSidebar","previous":{"title":"Directus MySQL Template","permalink":"/rlmg-pets/docs/software/CMS/directus-mysql-template"}}');var o=t(4848),r=t(8453);const i={},l="SCIOWA Cosmic Playlist App",c={},a=[{value:"Getting Started",id:"getting-started",level:2},{value:"Set Environment vars:",id:"set-environment-vars",level:3},{value:"Development:",id:"development",level:2},{value:"Production:",id:"production",level:2},{value:"Updating to the Latest Version",id:"updating-to-the-latest-version",level:2},{value:"Run from another docker-compose file",id:"run-from-another-docker-compose-file",level:2},{value:"Docker-compose from git",id:"docker-compose-from-git",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"sciowa-cosmic-playlist-app",children:"SCIOWA Cosmic Playlist App"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Requirements:"})," a server with either:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"the latest version of Node.js and NPM"}),"\n",(0,o.jsx)(n.li,{children:"Docker and Docker Compose installed"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Clone the repository:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/rollmug/sci-cosmic-playlist.git\ncd sci-cosmic-playlist\nnpm install\n"})}),"\n",(0,o.jsx)(n.h3,{id:"set-environment-vars",children:"Set Environment vars:"}),"\n",(0,o.jsxs)(n.p,{children:["In the project root directory, create a file called ",(0,o.jsx)(n.code,{children:".env.local"})," and add the following text, configuring the first three URLs as needed:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dotenv",children:"SCI_CONTROL_API_URL=https://path-to-api\nGRAPHQL_URL=https://path-to-directus/graphql\nFILES_BASE_URL=https://path-to-directus/assets\n\n# Cache Settings\nCACHE_DELAY=60          # Museum favorites cache (in seconds)\nLIMIT_SHOWS=66          # Number of user playlists to limit\nLIMIT_LAST_HOURS=12     # Only show results from last X hours\n\nDEV_MODE=true           # Set to false in production or just commented out\n\nNEXT_PUBLIC_SCI_CONTROL_API_URL=$SCI_CONTROL_API_URL\nNEXT_PUBLIC_FILES_BASE_URL=$FILES_BASE_URL\nNEXT_PUBLIC_GRAPHQL_URL=$GRAPHQL_URL\nNEXT_PUBLIC_LIMIT_SHOWS=$LIMIT_SHOWS\nNEXT_PUBLIC_LIMIT_LAST_HOURS=$LIMIT_LAST_HOURS\n"})}),"\n",(0,o.jsx)(n.h2,{id:"development",children:"Development:"}),"\n",(0,o.jsx)(n.p,{children:"To run the development server in Node (for testing):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Open ",(0,o.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})," with your browser to see the result."]}),"\n",(0,o.jsx)(n.h2,{id:"production",children:"Production:"}),"\n",(0,o.jsx)(n.p,{children:"For production use, run the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker-compose up -d --build\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Open ",(0,o.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})," with your browser to see the result"]}),"\n",(0,o.jsx)(n.h2,{id:"updating-to-the-latest-version",children:"Updating to the Latest Version"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"cd"})," to the project root directory."]}),"\n",(0,o.jsxs)(n.li,{children:["stop the running services (ie, ",(0,o.jsx)(n.code,{children:"docker-compose down"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:["Run ",(0,o.jsx)(n.code,{children:"git pull"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Start services again: ",(0,o.jsx)(n.code,{children:"docker-compose up -d --build"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"run-from-another-docker-compose-file",children:"Run from another docker-compose file"}),"\n",(0,o.jsxs)(n.p,{children:["Install this project in a directory that contains an existing ",(0,o.jsx)(n.code,{children:"docker-compose"})," file, as above. Then include the following in the existing docker-compose file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"services:\n  # other services etc...\n\n  cosmic-playlist:\n    container_name: cosmic-playlist\n    build:\n      context: ./sci-cosmic-playlist\n      # above is the relative path to the app directory\n    restart: always\n    environment:\n      NODE_ENV: production\n    env_file: \n      - .env.local\n    ports:\n      - 3000:3000\n    # networks:\n      # any networks here, if needed\n\n  # rest of compose file...\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When launching, make sure you include the ",(0,o.jsx)(n.code,{children:"build"})," commnad:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker-compose up -d --build\n"})}),"\n",(0,o.jsx)(n.h2,{id:"docker-compose-from-git",children:"Docker-compose from git"}),"\n",(0,o.jsx)(n.p,{children:"To build directly from git, use the following in your docker-compose file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"services:\n  # other services etc...\n\n  cosmic-playlist:\n    container_name: cosmic-playlist\n    build: https://github.com/rollmug/sci-cosmic-playlist.git\n    restart: always\n    environment:\n      NODE_ENV: production\n    env_file: \n      - .env.local\n    ports:\n      - 3000:3000\n    # networks:\n      # any networks here, if needed\n\n  # rest of compose file...\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(6540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);