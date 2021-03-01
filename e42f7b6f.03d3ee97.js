(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{118:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(7),r=(a(0),a(126)),o={id:"index-create",title:"3. Create Index",sidebar_label:"3. Create Index",slug:"/howtos/moviesdatabase/create"},s={unversionedId:"howtos/Moviesdatabase/create/index-create",id:"howtos/Moviesdatabase/create/index-create",isDocsHomePage:!1,title:"3. Create Index",description:"Before creating the index let's describe the dataset and insert entries.",source:"@site/docs/howtos/Moviesdatabase/create/index-create.mdx",slug:"/howtos/moviesdatabase/create",permalink:"/howtos/moviesdatabase/create",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/Moviesdatabase/create/index-create.mdx",version:"current",sidebar_label:"3. Create Index",sidebar:"docs",previous:{title:"2. Install Redisearch",permalink:"/howtos/moviesdatabase/install"},next:{title:"4. Query Data",permalink:"/howtos/moviesdatabase/query"}},l=[{value:"Sample Dataset",id:"sample-dataset",children:[{value:"Key and Data structure",id:"key-and-data-structure",children:[]}]},{value:"Insert Movies",id:"insert-movies",children:[]},{value:"RediSearch &amp; Indexing",id:"redisearch--indexing",children:[{value:"Create the Index",id:"create-the-index",children:[]}]}],c={toc:l};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Before creating the index let's describe the dataset and insert entries."),Object(r.b)("h2",{id:"sample-dataset"},"Sample Dataset"),Object(r.b)("p",null,"In this project you will use a simple dataset describing movies, for now, all records are in English. You will learn more about other languages in another tutorial."),Object(r.b)("p",null,"A movie is represented by the following attributes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"movie_id"))," : The unique ID of the movie, internal to this database"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"title"))," : The title of the movie."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"plot"))," : A summary of the movie."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"genre"))," : The genre of the movie, for now a movie will only have a single genre."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"release_year"))," : The year the movie was released as a numerical value."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"rating"))," : A numeric value representing the public's rating for this movie."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"votes"))," : Number of votes."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"poster"))," : Link to the movie poster."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"imdb_id"))," : id of the movie in the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://imdb.com"}),"IMDB")," database.")),Object(r.b)("h3",{id:"key-and-data-structure"},"Key and Data structure"),Object(r.b)("p",null,"As a Redis developer, one of the first things to look when building your application is to define the structure of the key and data (data design/data modeling)."),Object(r.b)("p",null,"A common way of defining the keys in Redis is to use specific patterns in them. For example in this application where the database will probably deal with various business objects: movies, actors, theaters, users, ... we can use the following pattern:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"business_object:key"))),Object(r.b)("p",null,"For example:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"movie:001")," for the movie with the id 001"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"user:001")," the user with the id 001")),Object(r.b)("p",null,"and for the movies information you should use a Redis ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.io/topics/data-types#hashes"}),"Hash"),". "),Object(r.b)("p",null,"A Redis Hash allows the application to structure all the movie attributes in individual fields; also RediSearch will index the fields based on the index definition."),Object(r.b)("h2",{id:"insert-movies"},"Insert Movies"),Object(r.b)("p",null,"It is time now to add some data into your database, let's insert a few movies, using ",Object(r.b)("inlineCode",{parentName:"p"},"redis-cli")," or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://redislabs.com/redisinsight/"}),"Redis Insight"),"."),Object(r.b)("p",null,"Once you are connected to your Redis instance run the following commands:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'\n> HSET movie:11002 title "Star Wars: Episode V - The Empire Strikes Back" plot "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy." release_year 1980 genre "Action" rating 8.7 votes 1127635 imdb_id tt0080684\n\n> HSET movie:11003 title "The Godfather" plot "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son." release_year 1972 genre "Drama" rating 9.2 votes 1563839 imdb_id tt0068646\n\n> HSET movie:11004 title "Heat" plot "A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist." release_year 1995 genre "Thriller" rating 8.2 votes 559490 imdb_id tt0113277\n\n> HSET "movie:11005" title "Star Wars: Episode VI - Return of the Jedi" genre "Action" votes 906260 rating 8.3 release_year 1983  plot "The Rebels dispatch to Endor to destroy the second Empire\'s Death Star." ibmdb_id "tt0086190" \n\n')),Object(r.b)("p",null,"Now it is possible to get information from the hash using the movie ID. For example if you want to get the title, and rating execute the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'> HMGET movie:11002 title rating\n\n1) "Star Wars: Episode V - The Empire Strikes Back"\n2) "8.7"\n')),Object(r.b)("p",null,"And you can increment the rating of this movie using:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'> HINCRBYFLOAT movie:11002 rating 0.1\n"8.8"\n')),Object(r.b)("p",null,"But how do you get a movie or list of movies by year of release, rating or title?"),Object(r.b)("p",null,"One option, would be to read all the movies, check all fields and then return only matching movies; no need to say that this is a really bad idea."),Object(r.b)("p",null,"Nevertheless this is where Redis developers often create custom secondary indexes using SET/SORTED SET structures that point back to the movie hash. This needs some heavy design and implementation."),Object(r.b)("p",null,"This is where the RediSearch module can help, and why it was created."),Object(r.b)("h2",{id:"redisearch--indexing"},"RediSearch & Indexing"),Object(r.b)("p",null,"RediSearch greatly simplifies this by offering a simple and automatic way to create secondary indices on Redis Hashes. (more datastructure will eventually come)"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://github.com/RediSearch/redisearch-getting-started/blob/master/docs/images/secondary-index.png?raw=true",alt:"Secondary Index"}))),Object(r.b)("p",null,"Using RediSearch if you want to query on a field, you must first index that field. Let's start by indexing the following fields for our movies:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Title"),Object(r.b)("li",{parentName:"ul"},"Release Year"),Object(r.b)("li",{parentName:"ul"},"Rating"),Object(r.b)("li",{parentName:"ul"},"Genre")),Object(r.b)("p",null,"When creating a index you define:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"which data you want to index: all ",Object(r.b)("em",{parentName:"li"},"hashes")," with a key starting with ",Object(r.b)("inlineCode",{parentName:"li"},"movies")," "),Object(r.b)("li",{parentName:"ul"},"which fields in the hashes you want to index using a Schema definition.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Warning: Do not index all fields"))),Object(r.b)("p",{parentName:"blockquote"},"Indexes take space in memory, and must be updated when the primary data is updated. So create the index carefully and keep the definition up to date with your needs.")),Object(r.b)("h3",{id:"create-the-index"},"Create the Index"),Object(r.b)("p",null,"Create the index with the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'> FT.CREATE idx:movie ON hash PREFIX 1 "movie:" SCHEMA title TEXT SORTABLE release_year NUMERIC SORTABLE rating NUMERIC SORTABLE genre TAG SORTABLE\n')),Object(r.b)("p",null,"Before running some queries let's look at the command in detail:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://oss.redislabs.com/redisearch/master/Commands/#ftcreate"}),Object(r.b)("inlineCode",{parentName:"a"},"FT.CREATE"))," : creates an index with the given spec. The index name will be used in all the key names so keep it short."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"idx:movie")," : the name of the index"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ON hash")," : the type of structure to be indexed. ",Object(r.b)("em",{parentName:"li"},"Note that in RediSearch 2.0 only hash structures are supported, this parameter will accept other Redis data types in future as RediSearch is updated to index them")," "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'PREFIX 1 "movie:"')," : the prefix of the keys that should be indexed. This is a list, so since we want to only index movie:* keys the number is 1. Suppose you want to index movies and tv_show that have the same fields, you can use: ",Object(r.b)("inlineCode",{parentName:"li"},'PREFIX 2 "movie:" "tv_show:"')," "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SCHEMA ..."),": defines the schema, the fields and their type, to index, as you can see in the command, we are using ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://oss.redislabs.com/redisearch/Query_Syntax/#a_few_query_examples"}),"TEXT"),", ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://oss.redislabs.com/redisearch/Query_Syntax/#numeric_filters_in_query"}),"NUMERIC")," and ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://oss.redislabs.com/redisearch/Query_Syntax/#tag_filters"}),"TAG"),", and ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://oss.redislabs.com/redisearch/Sorting/"}),"SORTABLE")," parameters.")),Object(r.b)("p",null,"You can find information about the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://oss.redislabs.com/redisearch/Commands/#ftcreate"}),"FT.CREATE")," command in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://oss.redislabs.com/redisearch/Commands/#ftcreate"}),"documentation"),"."),Object(r.b)("p",null,"You can look at the index information with the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"> FT.INFO idx:movie\n")))}b.isMDXComponent=!0},126:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=b(a),m=n,u=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return a?i.a.createElement(u,s(s({ref:t},c),{},{components:a})):i.a.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);