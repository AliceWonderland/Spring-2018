'use strict';
// const Bluebird = require('bluebird');

const db = require('./server/db');
const models=require('./server/db/models');
const Student=models.Student;
const Campus=models.Campus;
const Portfolio=models.Portfolio;

const defaultCampuses=[
    {name:'Terra',image:'https://unsplash.it/g/252/200/?image=941'},
    {name:'Europa',image:'https://unsplash.it/g/252/200/?image=961'},
    {name:'Galatea',image:'https://unsplash.it/g/252/200/?image=947'},
    {name:'Io',image:'https://unsplash.it/g/252/200/?image=1015'},
    {name:'Janus',image:'https://unsplash.it/g/252/200/?image=1051'},
    {name:'Oberon',image:'https://unsplash.it/g/252/200/?image=1040'},
    {name:'Tethys',image:'https://unsplash.it/g/252/200/?image=1028'}
];

const defaultStudents=[
    {firstName:'Erica',lastName:'Chuang',email:'erica@email.com', image:'https://unsplash.it/g/200/200/?image=923',campusId:1},
    {firstName:'Monroe',lastName:'Chuang',email:'monroe@email.com', image:'https://unsplash.it/g/200/200/?image=1056',campusId:2},
    {firstName:'Ace',lastName:'Ventura',email:'ace@email.com', image:'https://unsplash.it/g/200/200/?image=949',campusId:3},
    {firstName:'Tim',lastName:'Jones',email:'bob@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:4},
    {firstName:'Ann',lastName:'Lively',email:'ann@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:5},
    {firstName:'Holy',lastName:'Toledo',email:'holy@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:6},
    {firstName:'Cupcakes',lastName:'Forever',email:'cupcake@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:7},
    {firstName:'Sally',lastName:'Morton',email:'erica@email.com', image:'https://unsplash.it/g/200/200/?image=923',campusId:1},
    {firstName:'Bill',lastName:'Gladwell',email:'monroe@email.com', image:'https://unsplash.it/g/200/200/?image=1056',campusId:2},
    {firstName:'Mary',lastName:'Johnson',email:'ace@email.com', image:'https://unsplash.it/g/200/200/?image=949',campusId:3},
    {firstName:'Tom',lastName:'Rubenstein',email:'bob@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:4},
    {firstName:'Sue',lastName:'Vasquez',email:'ann@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:5},
    {firstName:'Harry',lastName:'Kim',email:'holy@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:6},
    {firstName:'Liz',lastName:'Choo',email:'cupcake@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:7},
    {firstName:'Lawrence',lastName:'Lagerfeld',email:'erica@email.com', image:'https://unsplash.it/g/200/200/?image=923',campusId:1},
    {firstName:'Ethan',lastName:'Chuang',email:'monroe@email.com', image:'https://unsplash.it/g/200/200/?image=1056',campusId:2},
    {firstName:'Victoria',lastName:'Ventura',email:'ace@email.com', image:'https://unsplash.it/g/200/200/?image=949',campusId:3},
    {firstName:'Alice',lastName:'Light',email:'bob@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:4},
    {firstName:'Jasmine',lastName:'Lively',email:'ann@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:5},
    {firstName:'Justin',lastName:'Bieber',email:'holy@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:6},
    {firstName:'Sarah',lastName:'Miller',email:'cupcake@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:7}
];

const defaultPortfolios= [{portDate:"2007-01-01",portTitle:"Grand Theft Auto IV",portSub:"2",portDesc:"Flash prototype, DHTML, Javascript, CSS, XML, PHP admin tool. Rich media campaigns.",portImg:"gtaiv.gif",portPub:"1",portLink:"http:\/\/www.rockstargames.com\/IV\/",portLinkText:"www.rockstargames.com\/iv",portEmployer:"Rockstar Games","portEmployerCity":"New York, NY",portYear:"2007",portKeywords:"cms tool"}, {portDate:"2007-01-01",portTitle:"Manhunt II",portSub:"2",portDesc:"Flash, DHTML, Javascript, CSS. Rich media campaigns.",portImg:"mh2.jpg",portPub:"1",portLink:"http:\/\/www.rockstargames.com\/manhunt2",portLinkText:"www.rockstargames.com\/manhunt2",portEmployer:"Rockstar Games","portEmployerCity":"New York, NY",portYear:"2007",portKeywords:null}, {portDate:"2007-01-01",portTitle:"Bully",portSub:"2",portDesc:"Flash, DHTML, Javascript, CSS, Audio\/video production. Rich media campaigns.",portImg:"bully.jpg",portPub:"1",portLink:"http:\/\/www.rockstargames.com\/bully",portLinkText:"www.rockstargames.com\/bully",portEmployer:"Rockstar Games","portEmployerCity":"New York, NY",portYear:"2007",portKeywords:null}, {portDate:"2007-01-01",portTitle:"Table Tennis",portSub:"2",portDesc:"Flash, DHTML, Javascript, CSS, Audio\/video production.",portImg:"tt.jpg",portPub:"1",portLink:"http:\/\/www.rockstargames.com\/tabletennis",portLinkText:"www.rockstargames.com\/tabletennis",portEmployer:"Rockstar Games","portEmployerCity":"New York, NY",portYear:"2007",portKeywords:null}, {portDate:"2006-01-01",portTitle:"Liberty City Stories",portSub:"2",portDesc:"Flash, DHTML, Javascript, CSS. Rich media campaigns.",portImg:"lcs.jpg",portPub:"1",portLink:"http:\/\/www.rockstargames.com\/libertycitystories",portLinkText:"www.rockstargames.com\/libertycitystories",portEmployer:"Rockstar Games","portEmployerCity":"New York, NY",portYear:"2006",portKeywords:null}, {portDate:"2006-01-01",portTitle:"Vice City Stories",portSub:"2",portDesc:"Flash, DHTML, Javascript, CSS, XML. Rich media campaigns.",portImg:"vcs.jpg",portPub:"1",portLink:"http:\/\/www.rockstargames.com\/vicecitystories",portLinkText:"www.rockstargames.com\/vicecitystories",portEmployer:"Rockstar Games","portEmployerCity":"New York, NY",portYear:"2006",portKeywords:null}, {portDate:"2006-01-01",portTitle:"The Warriors",portSub:"2",portDesc:"Flash, DHTML, Javascript, CSS, Audio\/video production. Rich media campaigns.",portImg:"warr.jpg",portPub:"1",portLink:"http:\/\/www.rockstargames.com\/thewarriors",portLinkText:"www.rockstargames.com\/thewarriors",portEmployer:"Rockstar Games","portEmployerCity":"New York, NY",portYear:"2006",portKeywords:null}, {portDate:"2005-01-01",portTitle:"Midnight Club 3: Dub Edition",portSub:"2",portDesc:"Flash, DHTML, Javascript, CSS, Audio\/Video production. Rich media campaigns.",portImg:"mc3.jpg",portPub:"1",portLink:"http:\/\/www.rockstargames.com\/midnightclub3\/",portLinkText:"www.rockstargames.com\/midnightclub3",portEmployer:"Rockstar Games","portEmployerCity":"New York, NY",portYear:"2005",portKeywords:null}, {portDate:"2004-01-01",portTitle:"Grand Theft Auto: San Andreas",portSub:"2",portDesc:"DHTML framework, flash prototype, Javascript, CSS. Rich media campaigns.",portImg:"sa.gif",portPub:"1",portLink:"http:\/\/www.rockstargames.com\/sanandreas\/",portLinkText:"www.rockstargames.com\/sanandreas",portEmployer:"Rockstar Games","portEmployerCity":"New York, NY",portYear:"2004",portKeywords:null}, {portDate:"2004-01-01",portTitle:"Rockstar Games",portSub:"2",portDesc:"Rockstar Games' corporate website. Flash, DHTML, Javascript, CSS, XML, RSS, Audio\/video production",portImg:"rsglogo2.gif",portPub:"1",portLink:"http:\/\/www.rockstargames.com\/",portLinkText:"www.rockstargames.com",portEmployer:"Rockstar Games","portEmployerCity":"New York, NY",portYear:"2004 - 2008",portKeywords:"2004, 2005, 2006, 2007, 2008"}, {portDate:"2003-01-01",portTitle:"GolfDigest.com",portSub:"2",portDesc:"Conde Nast Publications publishes most all their magazines and regional newspapers for the web through its sister company, Advance Internet. Developed components and maintained applications specifically for Modern Bride Magazine's large-scale site heavily driven by dynamic content using X\/DHTML, XML, XSL, Postgres, CGI\/Perl, and proprietary technology similar to SSI and PHP called ATA and SSF.",portImg:"golf.jpg",portPub:"1",portLink:"http:\/\/www.golfdigest.com\/",portLinkText:"www.golfdigest.com",portEmployer:"Advance Internet","portEmployerCity":"Journal Sq, NJ",portYear:"2003 - 2004",portKeywords:"2003, 2004"}, {portDate:"2003-01-01",portTitle:"PennDesign",portSub:"3",portDesc:"PennDesign's new site for University of Pennsylvaia's School of Design including DHTML, Flash, PHP, MySql",portImg:"penn1.jpg",portPub:"1",portLink:"http:\/\/www.design.upenn.edu\/",portLinkText:"www.design.upenn.edu",portEmployer:"ITVR Media","portEmployerCity":"New York, NY",portYear:"2003",portKeywords:null}, {portDate:"2003-01-01",portTitle:"Competitive Power Ventures",portSub:"3",portDesc:"Flash, DHTML, JS, CSS",portImg:"cpv.jpg",portPub:"1",portLink:"http:\/\/www.cpv.com\/",portLinkText:"www.cpv.com",portEmployer:"Ideas On Purpose","portEmployerCity":"Gramercy, NY",portYear:"2003",portKeywords:null}, {portDate:"2003-01-01",portTitle:"TB Alliance",portSub:"3",portDesc:"A global non-profit organization dedicated to tuberculosis research and development upgraded their current ASP site using ASP, SQL Server, JavaScript, and DHTML for a medium-scale informational site promoting Tuberculosis awareness and research",portImg:"tb2.jpg",portPub:"1",portLink:"http:\/\/www.tballiance.org\/",portLinkText:"www.tballiance.org",portEmployer:"ITVR Media","portEmployerCity":"Gramercy, NY",portYear:"2003",portKeywords:null}, {portDate:"2002-01-01",portTitle:"Thomson Financial",portSub:"3",portDesc:"Worked with a team of developers responsible for migrating over 300 client sites and incorporating client sites with Thomson's proprietary technology to provide dynamic Investor Relations content to sites like Reuters and PR Newsire using strict XHTML\/XML, JavaScript, CSS. [offline] (8-month contract)",portImg:null,portPub:"1",portLink:null,portLinkText:null,portEmployer:"Princeton Information","portEmployerCity":"New York, NY",portYear:"2002 - 2003",portKeywords:"2002, 2003"}, {portDate:"2003-01-01",portTitle:"Brides.com",portSub:"2",portDesc:"Developed components and maintained applications specifically for Modern Bride Magazine's large-scale site heavily driven by dynamic content using X\/DHTML, XML, XSL, Postgres, CGI\/Perl, and proprietary technology similar to SSI and PHP called ATA and SSF. Also included Modernbride.com and Elegantbride.com.",portImg:"brides1.jpg",portPub:"1",portLink:"http:\/\/www.brides.com\/",portLinkText:"www.brides.com",portEmployer:"Advance Internet","portEmployerCity":"Journal Sq, NJ",portYear:"2003 - 2004",portKeywords:"2003, 2004"}, {portDate:"2002-01-01",portTitle:"Coldwell Banker",portSub:"3",portDesc:"Worked for a small software company, developing and managing front-end development for a large scale Java-based public site as well as an intranet site utilizing heavy DHTML and JSP. Developed front-end templates and functionality for both sites including an IE-only site that required heavy DHTML implementation using JavaScript, DHTML, strict XHTML standards, XML. [coldwellbanker.com, concierge.coldwellbanker.com]",portImg:"coldwell1.jpg",portPub:"1",portLink:"http:\/\/concierge.coldwellbanker.com\/",portLinkText:"www.coldwellbanker.com",portEmployer:"Bootstrap Software","portEmployerCity":"Gramercy, NY",portYear:"2002",portKeywords:null}, {portDate:"2002-01-01",portTitle:"AT&T Small Business",portSub:"3",portDesc:"Developed JSP templates for integration with a Java-based site for AT&T Small Business Center.",portImg:"att.jpg",portPub:"1",portLink:"http:\/\/www.business.att.com\/",portLinkText:"www.business.att.com",portEmployer:"Principle MCD","portEmployerCity":"New York, NY",portYear:"2002",portKeywords:null}, {portDate:"2002-01-01",portTitle:"ACC Business",portSub:"3",portDesc:"Developed flat site for an affiliated division of AT&T Small Business Products and Services using DHTML, CSS, Javascript.",portImg:"acc.jpg",portPub:"1",portLink:"http:\/\/www.accbusiness.com\/",portLinkText:"www.accbusiness.com",portEmployer:"Principle MCD","portEmployerCity":"Gramercy, NY",portYear:"2002",portKeywords:null}, {portDate:"2001-01-01",portTitle:"Tyco Capital\/CIT",portSub:"3",portDesc:"Migrated and updated full site for CIT formerly known as Tyco Capital.",portImg:"cit.jpg",portPub:"1",portLink:"http:\/\/ir.cit.com\/",portLinkText:"ir.cit.com",portEmployer:"Principle MCD","portEmployerCity":"Gramercy, NY",portYear:"2001",portKeywords:null}, {portDate:"2001-01-01",portTitle:"HBO",portSub:"3",portDesc:"Developed dynamic dropdown menu for HBO.com",portImg:"hbo.jpg",portPub:"1",portLink:"http:\/\/www.hbo.com\/",portLinkText:"www.hbo.com",portEmployer:"Principle MCD","portEmployerCity":"Gramercy, NY",portYear:"2001",portKeywords:null}, {portDate:"2001-01-01",portTitle:"Johnnie Walker",portSub:"1",portDesc:"Developed front-end pages for the 'Keep Walking' campaign to integrate with Vignette StoryServer technology featuring DHTML animation, and DHTML menus. Flash, XHTML, DHTML, JavaScript, CSS.",portImg:"jw.gif",portPub:"1",portLink:"http:\/\/www.keepwalking.com\/",portLinkText:"www.keepwalking.com",portEmployer:"Nuforia - Red Sky Interactive","portEmployerCity":"New York, NY",portYear:"2001",portKeywords:null}, {portDate:"2001-01-01",portTitle:"Paine Webber",portSub:"1",portDesc:"For Paine Webber Personalization, a customer site to manage their accounts online. Created templates to be handed off to client for off-site integration featuring DHTML menus and sliding menus. [offline]",portImg:"pw.gif",portPub:"1",portLink:null,portLinkText:null,portEmployer:"Nuforia - Red Sky Interactive","portEmployerCity":"New York, NY",portYear:"2001",portKeywords:null}, {portDate:"2000-01-01",portTitle:"Slim Jim",portSub:"1",portDesc:"Developed marketing website featuring DHTML animation and dynamic placement of content. XHTML, DHTML, CSS, JavaScript.",portImg:"sj.gif",portPub:"1",portLink:"http:\/\/www.slimjim.com\/",portLinkText:"www.slimjim.com",portEmployer:"Nuforia - Red Sky Interactive","portEmployerCity":"New York, NY",portYear:"2000",portKeywords:null}, {portDate:"2000-01-01",portTitle:"Prime Contracts",portSub:"1",portDesc:"Developed extranet for home contractors featuring drifting layers, watermarks, and drag-drop menus. XHTML, DHTML, JavaScript, and CSS. [offline]",portImg:"pc.gif",portPub:"1",portLink:null,portLinkText:null,portEmployer:"Nuforia - Red Sky Interactive","portEmployerCity":"New York, NY",portYear:"2000",portKeywords:null}, {portDate:"2000-01-01",portTitle:"Prumerica",portSub:"1",portDesc:"Developed full flat site to be compliant across all browsers and international countries. Strict XHTML, DHTML, JavaScript, CSS.",portImg:"pru.gif",portPub:"1",portLink:"http:\/\/www.prumerica.net\/",portLinkText:"www.prumerica.net",portEmployer:"Nuforia - Red Sky Interactive","portEmployerCity":"New York, NY",portYear:"2000",portKeywords:null}, {portDate:"2000-01-01",portTitle:"World Medical Leaders",portSub:"1",portDesc:"Large back-end driven site for members of the medical community to engage in online discussions forums and earn continuing education credits through online broadcasts of medical symposia. \n\n Developed front-end pages, implemented threaded discussion board, and search engine functionality featuring embedded streaming video and synchronized presentation slides. \n\n XHTML, DHTML, JavaScript, CSS, JSP, Ichat, UltraSeek and Python, RealPlayer, RealPresenter, and SMIL.",portImg:"wml.gif",portPub:"1",portLink:"http:\/\/www.wml.com\/",portLinkText:"www.wml.com",portEmployer:"Nuforia - Red Sky Interactive","portEmployerCity":"New York, NY",portYear:"2000",portKeywords:null}, {portDate:"2009-01-01",portTitle:"CraftTV",portSub:"3",portDesc:"A dynamic post-production studio location for television and film. \r\nDHTML development. Dynamic site with admin tool. HTML, CSS, Javascript, PHP, MySQL",portImg:"craft.jpg",portPub:"1",portLink:"http:\/\/www.craftv.com\/",portLinkText:"www.craftv.com",portEmployer:"Independent","portEmployerCity":null,portYear:"2009",portKeywords:"cms tool"}, {portDate:"2008-01-01",portTitle:"Smyko.com",portSub:"3",portDesc:"A personal website for a NYC-based art director\/designer, Richard Smyko.\r\nDHTML development dynamic site with custom admin tool",portImg:"smyko.gif",portPub:"1",portLink:"http:\/\/www.smyko.com\/",portLinkText:"www.smyko.com",portEmployer:"Independent","portEmployerCity":"New York, NY",portYear:"2008",portKeywords:"cms tool"}, {portDate:"2007-01-01",portTitle:"Gabucan Kruger Wedding",portSub:"3",portDesc:"A wedding website for my two lovely friends ! Flash design and development.",portImg:"rk.gif",portPub:"1",portLink:"http:\/\/www.richardkruger.com\/wedding",portLinkText:"www.richardkruger.com\/wedding",portEmployer:"Independent","portEmployerCity":"New York, NY",portYear:"2007",portKeywords:"design"}, {portDate:"2006-01-01",portTitle:"DJ Surgeon",portSub:"3",portDesc:"Website for a UK-based electronic musician and DJ, Tony Childs, who releases music on his own labels Counterbalance and Dynamic Tension as well as imprints, such as Tresor, Soma, and Harthouse. Development for fully dynamic flash site that showcases downloadable music and samples, custom built cms tool, and online shopping cart.",portImg:"surgeon.gif",portPub:"1",portLink:"http:\/\/www.dj-surgeon.com\/",portLinkText:"www.dj-surgeon.com",portEmployer:"Independent","portEmployerCity":"New York, NY",portYear:"2006",portKeywords:"admin tool"}, {portDate:"2005-01-01",portTitle:"Momentum Films",portSub:"3",portDesc:"DHTML, JavaScript, CSS",portImg:"mm.gif",portPub:"1",portLink:"http:\/\/www.momentum-films.com\/",portLinkText:"www.momentum-films.com",portEmployer:"Independent","portEmployerCity":"New York, NY",portYear:"2005",portKeywords:null}, {portDate:"2005-01-01",portTitle:"In8Skils",portSub:"3",portDesc:"Development for a fully dynamic flash site, custom CMS tool. HTML. JS, CSS, PHP, MySQL. [offline]",portImg:null,portPub:"1",portLink:"http:\/\/www.in8skils.com\/",portLinkText:"www.in8skils.com",portEmployer:"Independent","portEmployerCity":"New York, NY",portYear:"2005",portKeywords:"admin tool"}, {portDate:"2005-01-01",portTitle:"Cai Guo-Qiang",portSub:"3",portDesc:"An online library for Cai Guo-Qiang, a prolific well known Chinese artist based out of NYC who recently had an exhibition at the Guggenheim. Development for a fully dynamic flash and PHP site.",portImg:"cgq.gif",portPub:"1",portLink:"http:\/\/www.caiguoqiang.com\/",portLinkText:"www.caiguoqiang.com",portEmployer:"Independent","portEmployerCity":"New York, NY",portYear:"2005",portKeywords:null}, {portDate:"2001-01-01",portTitle:"Russell Young",portSub:"3",portDesc:"DHTML, JavaScript, CSS",portImg:"ry.jpg",portPub:"1",portLink:"http:\/\/www.russellyoung.com",portLinkText:"www.russellyoung.com",portEmployer:"Independent","portEmployerCity":"New York, NY",portYear:"2001",portKeywords:null}, {portDate:"2001-01-01",portTitle:"People Used To Dream",portSub:"3",portDesc:"DHTML, JavaScript, CSS",portImg:"people1.jpg",portPub:"1",portLink:"http:\/\/www.peopleusedtodream.com\/",portLinkText:"www.peopleusedtodream.com",portEmployer:"Independent","portEmployerCity":"New York, NY",portYear:"2001",portKeywords:null}, {portDate:"2001-01-01",portTitle:"Nest Magazine",portSub:"3",portDesc:"Quarterly-magazine for interiors - Flash, XHTML, DHTML, JavaScript, CSS",portImg:"nm.gif",portPub:"1",portLink:"http:\/\/www.nestmagazine.com\/",portLinkText:"www.nestmagazine.com",portEmployer:"Independent","portEmployerCity":"New York, NY",portYear:"2001",portKeywords:null}, {portDate:"2001-01-01",portTitle:"Supreme Models",portSub:"3",portDesc:"New Faces Division, Women Model Management - XHTML, DHTML, JavaScript, CSS",portImg:"sm.jpg",portPub:"1",portLink:"http:\/\/www.suprememanagement.com\/",portLinkText:"www.suprememanagement.com",portEmployer:"Independent","portEmployerCity":"New York, NY",portYear:"2001",portKeywords:null}, {portDate:"2010-03-30",portTitle:"The Feast",portSub:"2",portDesc:"NBC's version of City Search or Yelp! Built with HTML, CSS, JS, JSON, Velocity, Clickability, FWIX. ",portImg:"feast.png",portPub:"1",portLink:"http:\/\/thefeast.com\/newyork",portLinkText:"TheFeast.com",portEmployer:"NBC Universal","portEmployerCity":"New York, NY",portYear:"2010 - 2013",portKeywords:"2010, 2011, 2012, 2013, html5, html 5, NBC Owned Television Stations, Local Integrated Media, Digital Media Labs"}, {portDate:"2010-03-30",portTitle:"NBC New York",portSub:"2",portDesc:"NBC's local news sites for 10 cities from Los Angeles to Chicago to New York. Specific sections include <a href=\"http:\/\/www.nbcnewyork.com\/news\/election-2012\/newyork-election-2012.html\" target=\"_blank\">Election Decision 2012<\/a>, <a href=\"http:\/\/www.nbcnewyork.com\/news\/national-international\/\" target=\"_blank\">US & World<\/a>, <a href=\"http:\/\/www.nbcnewyork.com\/video\/\" target=\"_blank\">Video Hub Landing<\/a>, <a href=\"http:\/\/www.nbcnewyork.com\/news\/national-international\/\" target=\"_blank\">Entertainment Landing<\/a>, <a href=\"http:\/\/www.nbcnewyork.com\/traffic\" target=\"_blank\">Traffic Maps<\/a>, <a href=\"http:\/\/www.nbcnewyork.com\/weather\/\" target=\"_blank\">Weather<\/a>, <a href=\"http:\/\/www.nbcnewyork.com\/mobile\/\" target=\"_blank\">Mobile Landing<\/a>. HTML, CSS, Javascript, jQuery, JSON, Velocity, Clickability\r\n",portImg:"nbcnewyork.png",portPub:"1",portLink:"http:\/\/nbcnewyork.com",portLinkText:"NBCNewYork.com",portEmployer:"NBC Universal","portEmployerCity":"New York, NY",portYear:"2010 - 2013",portKeywords:"2010, 2011, 2012, 2013, html5, html 5, NBC Owned Television Stations, Local Integrated Media, Digital Media Labs"},

	{portDate:"2018-02-01",portTitle:"Fuzz App",portSub:"4",portDesc:"Responsive Nav Skeleton using vanilla HTML\/CSS\/JS for all responsive behaviors. CSS Media Query, Flexbox, Vue.js",portImg:"fuzz-app.png",portPub:"1",portLink:"http:\/\/alicechuang.com\/nerdery\/fuzz\/",portLinkText:"http:\/\/alicechuang.com\/nerdery\/fuzz\/",portEmployer:"Node",portEmployerCity:"New York",portYear:"2018",portKeywords:"Responsive, CSS, Flexbox, Vue, HTML, JS, Javascript"},

	{portDate:"2018-02-01",portTitle:"Meme App",portSub:"4",portDesc:"Search for the latest trending Gifs in your favorite categories from Giphy or Reddit!\r\n\r\nThis React App uses Giphy API and Reddit API to access data from each site respectively.",portImg:"giphy-app.png",portPub:"1",portLink:"http:\/\/meme.alicechuang.com\/",portLinkText:"meme.alicechuang.com",portEmployer:"Node",portEmployerCity:"New York, NY",portYear:"2018",portKeywords:"React, React-Router, Babel, Webpack, Sass, Styled Components"},

	{portDate:"2018-01-01",portTitle:"Distances App",portSub:"4",portDesc:"React web app to calculate the distance in time between two IPs. Using React, Redux, Sass, Babel, Webpack, Fetch API, Google Distances API and FreeGeoIP.",portImg:"distances.png",portPub:"1",portLink:"http:\/\/distances.alicechuang.com\/",portLinkText:"distances.alicechuang.com",portEmployer:null,"portEmployerCity":"New York, NY",portYear:"2018",portKeywords:"React, Redux, Sass, Babel, Webpack, Fetch API, Google Distances API"},

	{portDate:"2018-01-01",portTitle:"Basket App",portSub:"4",portDesc:"Grocery List Tracker to add items to your basket. Static web app in React, Redux, SASS, FontAwesome",portImg:"basket-app.png",portPub:"1",portLink:"http:\/\/basket.alicechuang.com\/",portLinkText:"basket.alicechuang.com",portEmployer:null,"portEmployerCity":"New York, NY",portYear:"2018",portKeywords:"React, Redux, SASS, create-react-app, FontAwesome"},

    {portDate:"2017-09-01",portTitle:"Senior Enrichment Project",portSub:"4",portDesc:"Simple React Web App to manage students and campuses!\r\n\r\nWeb App based in Node, React, Sequelize, Postgres Stack.",portImg:"mag-ham.png",portPub:"1",portLink:"http:\/\/app3.alicechuang.com\/",portLinkText:"app3.alicechuang.com",portEmployer:null,"portEmployerCity":"New York, NY",portYear:"2017",portKeywords:"Node, Express, React, Sequelize, Postgres, Single-Page Application"},

    {portDate:"2017-08-01",portTitle:"Giphy Meme Generator",portSub:"4",portDesc:"Electron React App to create custom memes using Giphy API",portImg:"giphymeme.png",portPub:"1",portLink:"https:\/\/github.com\/AliceWonderland\/giphy-meme",portLinkText:"github.com\/AliceWonderland\/giphy-meme",portEmployer:null,"portEmployerCity":"New York, NY",portYear:"2017",portKeywords:"Electron, React, Redux, Giphy API"},

    {portDate:"2017-09-01",portTitle:"SlyDv - Slide Creator for Devs",portSub:"4",portDesc:"Create slide presentations with an embedded live code editor. Built in Node, Express, React, Redux, Sequelize, Postgres, Sockets, Markdown.",portImg:"slydv.png",portPub:"1",portLink:"http:\/\/www.slydv.tech\/",portLinkText:"www.slydv.tech",portEmployer:null,"portEmployerCity":"New York, NY",portYear:"2017",portKeywords:"Node, Express, React, Redux, Sequelize, Postgres, Sockets, and Markdown"}

	];

// To export from mysql - export as json w/out portId, remove quote from obj keys
// To load data - create DB in PG, run npm run start-dev, then run node seed
// To reload data - set force:true node seed.js, set force:false node seed.js

// To re-seed on server - switch connection string in db/index set force:true in db/index node seed.js, set force: false node seed.js

// using .bulkCreate instead of .create
// not working properly with .finally - must revisit
db.sync({ force: false })
    .then((p1) => Campus.bulkCreate(defaultCampuses))
    .then((p2) => Student.bulkCreate(defaultStudents))
    .then((p3) => Portfolio.bulkCreate(defaultPortfolios))
    // .then((p3) => {
    //     return defaultPortfolios.map(item => Portfolio.create(item))
    // })
    .then((p4) => {
        console.log('hey, it seeded!');
        db.close();
        console.log('connection closed!');
    })
    .catch(err => console.log('error seeding', err))
    // .finally(() => {
    //     db.close();
    //     console.log('connection closed!');
    // });

// Bluebird Version
// turn off force true, must run after npm run start-dev
// db.sync({ force: false })
// .then(() => Bluebird.map(defaultCampuses, item => Campus.create(item)))
// .then(() => Bluebird.map(defaultStudents, item => Student.create(item)))
// .then(() => Bluebird.map(defaultPortfolios, item => Portfolio.create(item)))
// .then(() => console.log('hey, it seeded!'))
// .catch(err => console.log('err seeding', err))
// .finally(() => {
//     db.close();
//     console.log('connection closed!');
// });


// var p1 = new Promise((resolve, reject) => {
//     return db.sync({ force: true });
// });
// var p2 = new Promise((resolve, reject) => {
//     Campuses.bulkCreate(defaultCampuses);
// });
// var p3 = new Promise((resolve, reject) => {
//     Students.bulkCreate(defaultStudents);
// });
// var p4 = new Promise((resolve, reject) => {
//     console.log('hey, it seeded!');
//     db.close();
//     console.log('connection closed!');
// });
// Promise.all([p1, p2, p3, p4]).then(values => {
//     console.log(values);
// })
// .catch(err => console.log('error seeding', err));

//You can also use .catch
// Promise.all([p1, p2, p3, p4, p5]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.log(reason)
// });

