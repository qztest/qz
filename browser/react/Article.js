import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div>
        <div className='text-container' >
          <h1 className='headline dark' >{article.items[0].title}</h1>
        </div>
        <div className='featureImage' >
          <img src={article.items[0].hero.url} alt={article.items[0].hero.alt} />
        </div>
        <div className='text-container'>
          <div className='body light' dangerouslySetInnerHTML={{__html: article.items[0].content}} />
        </div>
      </div>
    );
  }
}

// to avoid using dangerouslySetInnerHTML https://github.com/noraesae/react-render-html

const article = {
  "version":3,
  "header":{
    "name":"Top Stories",
    "path":"top\/",
    "slug":"top",
    "type":"top"
  },
  "items":[
  {
    "id":882417,
    "title":"To-do list for Mark Zuckerberg\u2019s 2020 presidential run",
    "slug":"to-do-list-for-mark-zuckerbergs-2020-presidential-run",
    "permalink":"https:\/\/qz.com\/882417\/to-do-list-for-mark-zuckerbergs-2020-presidential-run\/",
    "date":{
      "published":"2017-01-11 10:00:00",
      "updated":"2017-01-11 10:00:01",
      "pretty":"6 hours ago"
    },
    "postType":"article",
    "summary":"Hi Mr. Zuckerberg, this is Bradley from Campaign Associates, the firm your team hired to help you look into a presidential run. We&#8217;ve been working&hellip;","inlineAds":["inline-882417-1"],"content":"\n<p>Hi Mr. Zuckerberg, this is Bradley from Campaign Associates, the firm your team hired to help you look into a presidential run. We&rsquo;ve been working hard on making Zuckerberg 2020 a reality.<\/p>\n<p>I wanted to update you with the most recent list of tasks still to be completed, which together we think will give you the best possible shot at presidential victory. There&rsquo;s a lot to do still! But everything is progressing nicely so far.<\/p>\n<pre style=\"white-space:pre-wrap;\">[X] <strong>Hire top Democratic campaign manager.<\/strong> Good <a href=\"https:\/\/qz.com\/882475\/facebook-fb-ceo-mark-zuckberg-hires-david-plouffe-and-ken-mehlman-to-the-chan-zuckerberg-initiative\/\">pickup<\/a> with former Obama man David Plouffe.\r\n\r\n[X] <strong>Promise to visit all 50 states.<\/strong> We are very enthusiastic about your <a href=\"https:\/\/www.facebook.com\/zuck\/posts\/10103385178272401\">personal challenge<\/a> this year.\r\n\r\n[ ] <strong>Visit all 50 states.<\/strong>\r\n\r\n[ ] <strong>Turn 35.<\/strong> The age requirements are different for billionaires than they are for presidents! Luckily you'll hit 35 in May 2019, just in time for the campaign.\r\n\r\n[X]<strong> Hire top Republican campaign manager. <\/strong>Having Kenneth Mehlman <a href=\"https:\/\/www.nytimes.com\/2017\/01\/10\/technology\/chan-zuckerberg-initiative-builds-political-muscle-for-philanthropic-work.html\">join<\/a> your public policy board is a great decision.\r\n\r\n[ ] <strong>Become less awkward.<\/strong> The <a href=\"https:\/\/www.youtube.com\/watch?v=SHNyfG0YPqA\">recent video<\/a> showing off your custom-built home AI was impressive technically, but&hellip; we'll have to work on approachability and stage presence.\r\n\r\n[X] <strong>Donate <a href=\"https:\/\/qz.com\/563110\">lots and lots<\/a> of money.<\/strong> You have plenty, and this will be great for your image.\r\n\r\n[X] <strong><a href=\"https:\/\/qz.com\/876574\/facebook-ceo-mark-zuckerberg-says-hes-no-longer-an-atheist\/\">Find religion<\/a>.<\/strong>\r\n\r\n[ ] <strong>Develop a political platform and policy ideas. (<\/strong>This doesn't need to happen right away.)\r\n\r\n[ ] <strong>Wear suits more often.<\/strong> There is a certain charm to the nerd-in-a-hoodie vibe, but it does not have the mass appeal of a suit and tie.\r\n\r\n[ ] <strong>Prevent Winklevoss twins from causing any problems.<\/strong> Not sure what they might do; just covering all our bases.\r\n\r\n[X] <strong>Take control of largest real and fake news dissemination platform in human history.<\/strong>\r\n<\/pre>\n<div class=\"inline-ad\" id=\"inline-882417-1\"><\/div><p>That&rsquo;s it! Really excited to move this forward. We&rsquo;ll be sure to add anything else we think of as we approach campaign season.<\/p>\n<p>Let me just say too that our initial surveys show you performing very well against president-elect Donald Trump, who is setting us up with a helpful precedent: He, like you, is an entrepreneur with no political experience.<\/p>\n<p>Best,<br>\nBradley<br><em>Senior Campaign Associate<\/em><br><strong>Campaign Associates<\/strong><\/p>\n",
    "hero":{
      "id":882540,
      "alt":"Facebook founder Mark Zuckerberg waves to the audience during a meeting of the APEC (Asia-Pacific Economic Cooperation) Ceo Summit in Lima, Peru, November 19, 2016.",
      "caption":"Looking the part.",
      "credit":"Reuters\/Mariana Bazo",
      "width":2872,
      "height":1615,
      "aspectRatio":1.7783281733746,
      "url":"https:\/\/qzprod.files.wordpress.com\/2017\/01\/zuckerberg-presidential-e1484086744914.jpg?quality=80&strip=all&w=2872",
      "size":"extra-large"
    },
    "kicker":"ZUCK 2020",
    "seoTitle":"Mark Zuckerberg: What Mark Zuckerberg will have to do to run for president in 2020",
    "facebookDescription":"There&#039;s a lot to do still, but things are progressing nicely.",
    "edition":"global",
    "popularPostsRank":3,
    "taxonomies":{
      "obsession":[
      { "name":"2016", "slug":"2016" }
      ],
      "tags":
      [
      { "name":"2020", "slug":"2020-2" },
      { "name":"American politics", "slug":"american-politics" },
      { "name":"campaigns", "slug":"campaigns" },
      { "name":"facebook", "slug":"facebook" },
      { "name":"Mark Zuckerberg", "slug":"mark-zuckerberg" },
      { "name":"politics", "slug":"politics" },
      { "name":"presidency", "slug":"presidency" },
      { "name":"presidential campaign", "slug":"presidential-campaign" },
      { "name":"Priscilla Chan", "slug":"priscilla-chan" },
      { "name":"satire",  "slug":"satire" },
      { "name":"Silicon Valley", "slug":"silicon-valley" },
      { "name":"tech", "slug":"tech" },
      { "name":"Technology", "slug":"technology" },
      { "name":"US Politics", "slug":"us-politics" }
      ],
      "topic":
      [
      { "name":"Politics and Policy", "slug":"politics-and-policy-t" }
      ]
    },
    "obsession":{ "name":"2016", "slug":"2016" },
    "byline":{
      "authors":
      [
      {
        "name":"Nikhil Sonnad",
        "username":"nsonnadqz",
        "url":"https:\/\/qz.com\/author\/nsonnadqz\/",
        "twitter":"nkl"
      }
      ],
      "type":"author",
      "label":"Written by"
    },
    "share":{
      "twitter":"https:\/\/twitter.com\/intent\/tweet?url=https%3A%2F%2Fqz.com%2F882417&text=To-do%20list%20for%20Mark%20Zuckerberg%E2%80%99s%202020%20presidential%20run&via=qz",
      "facebook":"https:\/\/www.facebook.com\/sharer.php?u=https%3A%2F%2Fqz.com%2F882417%2Fto-do-list-for-mark-zuckerbergs-2020-presidential-run%2F",
      "linkedin":"https:\/\/www.linkedin.com\/shareArticle?mini=true&url=https%3A%2F%2Fqz.com%2F882417%2Fto-do-list-for-mark-zuckerbergs-2020-presidential-run%2F&title=To-do%20list%20for%20Mark%20Zuckerberg%E2%80%99s%202020%20presidential%20run&summary=Hi%20Mr.%20Zuckerberg%2C%20this%20is%20Bradley%20from%20Campaign%20Associates%2C%20the%20firm%20your%20team%20hired%20to%20help%20you%20look%20into%20a%20presidential%20run.%20We%E2%80%99ve%20been%20working%E2%80%A6&source=Quartz",
      "email":"mailto:?subject=Quartz%3A%20To-do%20list%20for%20Mark%20Zuckerberg%E2%80%99s%202020%20presidential%20run&body=https%3A%2F%2Fqz.com%2F882417%2Fto-do-list-for-mark-zuckerbergs-2020-presidential-run%2F%0A%0AHi%20Mr.%20Zuckerberg%2C%20this%20is%20Bradley%20from%20Campaign%20Associates%2C%20the%20firm%20your%20team%20hired%20to%20help%20you%20look%20into%20a%20presidential%20run.%20We%E2%80%99ve%20been%20working%E2%80%A6%0A%0ASign%20up%20for%20the%20Quartz%20Daily%20Brief%3A%20https%3A%2F%2Fbit.ly%2Fquartzdailybrief.",
      "whatsapp":"whatsapp:\/\/send?text=To-do%20list%20for%20Mark%20Zuckerberg%E2%80%99s%202020%20presidential%20run%3A+https%3A%2F%2Fqz.com%2F882417%2Fto-do-list-for-mark-zuckerbergs-2020-presidential-run%2F"
    }
  }]
}

export default Article;
