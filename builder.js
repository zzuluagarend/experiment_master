Survey
	.StylesManager
	.applyTheme("bootstrap");

var surveyJSON = {
 "pages": [
  {
   "name": "welcome_page",
   "elements": [
    {
     "type": "html",
     "name": "introduction",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n\n<h1><center>Welcome!</center></h1>\n<br />\n<br />\n<p>Thank you for taking part in this experiment! The data you will provide here will be kept anonymous and only shared with the researchers supervising this master thesis.\n<br />\n<br />Your participation in this experiment is voluntary. You may quit at any moment without negative consequences.\n<br />\n<br />\nPlease read carefully the instructions and answer the questions fully.</p>\n<br />\n<br />\n</body>\n</html>\n"
    }
   ]
  },
  {
   "name": "id",
   "elements": [
    {
     "type": "html",
     "name": "id_instructions",
     "html": "</html>\n<h1><center>Instructions</center></h1>\n</br>\n</br>\nBefore starting, please enter in the textbox below the ID you used during the web-based part of this experiment. Remember that your ID corresponds to the first two letters of your first name followed by the first two letters of your last name and the two-digit number of your birthday (e.g. <i>John Doe</i>, jodo12). \n\n</br>\n</br><p style=\"font-size:20px\">Please enter your ID:</p>\n</html>"
    },
    {
     "type": "text",
     "name": "id_input",
     "isRequired": true,
     "titleLocation": "hidden"
    }
   ]
  },
  {
   "name": "general_instructions",
   "elements": [
    {
     "type": "html",
     "name": "instruction_imc",
     "html": "</html>\n<h1><center>Work-out</center></h1>\n</br>\n<p style=\"font-size:15px\">In this study, you will be providing some ratings and written explanations on several topics. As in any other experiment, thorough attention to the instructions is expected to obtain reliable results. With that in mind, this screen aims to ensure that you are actually taking the time to carefully read the instructions. So, in order to demonstrate that you have read these instructions, please ignore the question for how frequent you engage in physical activity. Instead, please click on the little dot below to proceed with the experiment.</p><center><p style=\"font-size:30px\">How many days a week do you exercise?</p></center>\n</html>"
    },
    {
     "type": "radiogroup",
     "name": "activity_disctractor",
     "indent": 0,
     "titleLocation": "hidden",
     "choices": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7"
     ],
     "colCount": 0
    },
    {
     "type": "html",
     "name": "question1",
     "html": "</br>\n</br>\n</br>\n</br>\n</br>\n"
    },
    {
     "type": "radiogroup",
     "name": "control_imc",
     "indent": 0,
     "isRequired": true,
     "titleLocation": "hidden",
     "choices": [
      {
       "value": "1",
       "text": " "
      }
     ],
     "otherErrorText": "c"
    }
   ]
  },
  {
   "name": "crt",
   "elements": [
    {
     "type": "html",
     "name": "crt_instructions",
     "html": "</html>\n</br>\n</br>\nTo start off, please solve the problems below. </br>\n\n</html>"
    },
    {
     "type": "multipletext",
     "name": "crt_questions",
     "titleLocation": "hidden",
     "items": [
      {
       "name": "crt_1",
       "title": "A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball.  How much does the ball cost? $ ____"
      },
      {
       "name": "crt_2",
       "title": "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take  100 machines to make 100 widgets? ____ minutes"
      },
      {
       "name": "crt_3",
       "title": "In a lake, there is a patch of lily pads. Every day, the patch doubles in size.  If it takes 48 days for the patch to cover the entire lake, how long would it take for the patch to cover half of the lake? ____ days"
      }
     ]
    }
   ]
  },
  /*Math.random()>0.5?{
   "name": "news_stimulus_negative",
   "elements": [
    {
     "type": "html",
     "name": "ins_news_negative",
     "html": "</html>\n</br>\n</br>\nNow, you will see below a random news article about one social topic. Please carefully read the whole piece before continue.</br>\n\n</html>"
    },
    {
     "type": "html",
     "name": "negative_news",
     "html": "</html>\n<h1><center>Bitcoin buster? A greater fool’s gold</center></h1>\n</br>\n<p>After a decade since the first cryptocurrency–digital tokens known as cryptos for short–saw the light of day, more than 2,000 different cryptos have brought investors into a fool’s gold fever.\n</br>\n</br>\n Cryptos have investors in the grip of a gold rush fever, with billions being traded every day and prices soaring and crashing alarmingly. This volatility may be a speculative trader's friend, but it has reinforced cryptos' reputation for being high-risk investments for the adrenalin-fuelled \"get rich quick\" brigade.\n</br>\n</br>\nSince their launch, this unpredictable fluctuation has raised concerns among experts and state authorities. So, a growing number of crypto start-ups have been forced to develop alternatives as the so-called stablecoins–digital tokens pegged to traditional fiat currencies such as the US dollar or the British pound–in unsuccessful attempts to stabilize the fluctuation. However, warnings and skeptical views persist.\n</br>\n</br>\n\"Despite their lack of understanding, cryptoasset owners are often looking for ways to 'get rich quick' citing friends, acquaintances and social media influencers as key motivations for buying cryptoassets,\" said Christopher Woolard, of the Financial Conduct Authority (FCA). \"Cryptoassets are complex, volatile products - consumers investing in them should be prepared to lose all of their money,\" he added.\n</br>\n</br>\nThe stability of a currency is vital to value assets attached to it. For cryptos, assets set in these currencies experience dramatic devaluations in briefly periods of time, which can put at risk an already fragile monetary system. That goes without mention the transaction system on which cryptos rely, which currently works at a rate of 13 transactions per second, far behind the 200,000 transactions per second just Visa showed in 2018.\n</br>\n</br>\nThe world of digital currency has also little regulatory oversight and a history of hacking threats, and minimal consumer protection. Last February for instance, the untimely death of Gerald Cotten, head of the biggest Canadian cryptocurrency exchanges – Quadriga CX – shook investors with a loss of C$ 180m ($135m). Since all the transaction information was encrypted in his laptop–which has not yet been cracked–, his decease vanished the investors’ access to their cryptos hosted in the platform. The meltdown of Quadriga CX left thousands of investors with the uncertainty of what will happen with their money.\n</br>\n</br>\nThere is even less reason to trust software developed by small teams of programmers who hope both to become insanely rich and to circumvent all efforts by governments to control them. So long as ordinary people can expect to make their fortunes overnight, proliferation of cryptos seems unlikely to drop off in the years to come.\n</p>\n</html>"
    },
    {
     "type": "multipletext",
     "name": "control_negative",
     "correctAnswer": {
      "text1": "13"
     },
     "isRequired": true,
     "titleLocation": "hidden",
     "items": [
      {
       "name": "distractor_negative",
       "title": "What was the first rate of transactions per second mentioned in the text? Please input only the number"
      }
     ]
    }
   ]
  }:*/
  {
   "name": "news_stimulus_positive",
   "elements": [
    {
     "type": "html",
     "name": "ins_news_positive",
     "html": "</html>\n</br>\n</br>\nNow, you will see below a random news article about one social topic. Please carefully read the whole piece before continue.</br>\n\n</html>"
    },
    {
     "type": "html",
     "name": "positive_news",
     "html": "</html>\n<h1><center>Bitcoin buster? The Future of Global Economy</center></h1>\n</br>\n<p>After a decade since the first cryptocurrency–digital tokens known as cryptos for short–saw the light of day, more than 2,000 different cryptos are being traded on about 190 exchange platforms around the world.\n</br>\n</br>\nCryptos have provided investors with an attractive method of decentralized currencies, with billions being traded every day. And most importantly, they are not affected by volatile politics or global banking crises.\n</br>\n</br>\nSince their launch, every crypto has seen increased its value, sometimes by 1000 times. Price fluctuations now seem to be a problem of the past thanks to a growing number of crypto start-ups known as stablecoins. These work as digital tokens pegged to traditional fiat currencies such as the US dollar, the British pound, or the Japanese yen to counterbalance inflationary effects. As expressed by the crypto finance company Circle, stable coins have increased investor confidence in cryptos.\n</br>\n</br>\n\"Imagine a US dollar coin that you can make payments with, use on crypto networks, or use in smart contracts to pay dividends, but which you can convert back to fiat currency at any time,\" explains Circle chief executive Jeremy Allaire. \"We're going to see a lot of businesses using tokens for revenue raising. And eventually central banks will want to do this,\" maintains Mr. Allaire.\n</br>\n</br>\nThe stability of a currency is highly praised as it impacts directly on the trust of investors and, consequently, acquisitive power. For cryptos, this has led to the tokenization of assets such as automobiles, companies and real state. Most people in the sector agree that crypto's ability to act as a smart contract presents huge opportunities to value physical assets. In countries with unstable economies, cryptos have offered an alternative for people to take part in a reliable transaction system and set their assets on currencies easily available and more reliable than those backed by local governments.\n</br>\n</br>\n\"Say I have a house in downtown Saigon worth $1m,\" says Kory Hoang, founder of Stably. \"I could tokenize it and sell those tokens on the global crypto market. You could issue a billion pieces of your house if you wanted. Then people would start trading them, just like shares in a real estate investment trust. It gives investors around the world access to investment opportunities they never had before.\"\n</br>\n</br>\nAlthough work is still afoot, strategies as satablecoins show how adaptive is the crypto system, responding quickly to changes and investors' concerns. Future looks promising for cryptos setting them as a real update to the global economic system. Let us see what will happen.\n</p>\n</html>"
    },
    {
     "type": "matrix",
     "name": "control_positive",
     "correctAnswer": {
      "Row 1": "Column 2"
     },
     "isRequired": true,
     "titleLocation": "hidden",
     "columns": [
      {
       "value": "1",
       "text": "Circle"
      },
      {
       "value": "2",
       "text": "Expanse"
      },
      {
       "value": "3",
       "text": "Stably"
      }
     ],
     "rows": [
      {
       "value": "ques_1",
       "text": "Which company is not mentioned in the text?"
      }
     ]
    }
   ]
  },
  {
   "name": "ioed_instructions",
   "elements": [
    {
     "type": "html",
     "name": "ioed_inst",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n\n<h1><center>Rating Scale Instructions</center></h1>\n<br />\n<br />\n<p>In the next section, I will ask you to rate how well you understand certain topics. You will make your ratings on a 7-point scale where 1 means “vague understanding” and 7 means “complete understanding”. Before starting, these introductions will try to make clear what different scores on the scale are supposed to reflect. On next screens, you will see different levels of understanding of how climate change works and how human activity has contributed to it.\n<br />\n<br />Please read each explanation level in order to understand how to use the rating scale. As you will see, a 7 implies detailed and deep knowledge of the impacts of human activity on climate change. A 1 implies very little knowledge and a 4 is in the middle.\n</p>\n</body>\n</html>\n"
    }
   ]
  },
  {
   "name": "ioed_7_understanding",
   "elements": [
    {
     "type": "html",
     "name": "7_understanding",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n<p>\n<h1><center>Rating Scale Instructions</center></h1>\n</br>\n<b>Level 7 of knowledge: </b>A person with level 7 of knowledge has a deeply and detailed knowledge of how global warming occurs and what role human activity has played on accelerating it. For instance, she will know that Earth's normal temperature is a natural process that follows from the Earth’s absorption of sunlight. As the Earth transforms sunlight’s energy into infrared light, greenhouse gases (methane, carbon dioxide, etc.) in the air absorb that energy causing the atmosphere to heat up.\n<br />\n<br />\nShe will also know that the warm atmosphere emits more infrared light causing it to be re-absorbed several times before it  eventually returns to space, keeping the Earth warm. The longer the infrared light stays in the atmosphere, the warmer the water and ground will get.\n<br />\n<br />It will be clear for her that since the industrial age, human activities like energy, food, and goods production has increased the amount of methane and carbon dioxide released to the atmosphere. Such increase causes an extra absorption of infrared light that slows the rate at which sunlight’s energy escapes to space. As more infrared light is captured, the average temperature rises contributing to the global warming.\n</p>\n</body>\n</html>\n"
    }
   ]
  },
  {
   "name": "ioed_4_understanding",
   "elements": [
    {
     "type": "html",
     "name": "4_understanding",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n<p>\n\n<h1><center>Rating Scale Instructions</center></h1>\n</br>\n<b>Level 4 of knowledge: </b>A person with level 4 of knowledge has a general idea of how climate change occurs and how human activities affect it, although without deep or detailed understanding. For instance, she might know that climate change occurs by means of greenhouse gases that somehow absorb solar energy, heating up the Earth.\n<br />\n<br />\nShe might also know that the bigger the amount of greenhouse gases released to the atmosphere, the warmer the Earth will get. It would be clear to her that human activity boosts this process causing higher temperatures. \n</p>\n</body>\n</html>\n"
    }
   ]
  },
  {
   "name": "ioed_1_understanding",
   "elements": [
    {
     "type": "html",
     "name": "1_understanding",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n<p>\n\n<h1><center>Rating Scale Instructions</center></h1>\n</br>\n<b>Level 1 of knowledge: </b>A person with level 1 of knowledge would probably have a very superficial understanding of global warming. She might know that fossil fuels cause the Earth's temperature to increase but how this occurs, and by which means (e.g., infrared light, greenhouse gases) is unknown to her. \n</p>\n</body>\n</html>\n"
    }
   ]
  },
  {
   "name": "ioed_pre_ratings",
   "elements": [
	{
     "type": "html",
     "name": "instructions_ioed_pre",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n<p>\n\n<h1><center>Rating Scale</center></h1>\n</br>\nWith the climate change example in mind, please rate your understanding on the topics below using the 7-point scale you just read. \n</p>\n</body>\n</html>\n"
    },
    {
     "type": "matrix",
     "name": "ioed_pre",
     "indent": 1,
     "isRequired": true,
     "titleLocation": "hidden",
     "columns": [
      {
       "value": "1",
       "text": "1 Vague Understanding"
      },
      "2",
      "3",
      {
       "value": "4",
       "text": "4 Intermediate Understanding"
      },
      "5",
      "6",
      {
       "value": "7",
       "text": "7 Complete Understanding"
      }
     ],
     "rows": [
      {
       "value": "n_energy",
       "text": "Nuclear Energy"
      },
      {
       "value": "brexit",
       "text": "Brexit"
      },
      {
       "value": "gmo",
       "text": "Genetically Modified Organisms"
      },
      {
       "value": "crypto",
       "text": "Cryptocurrencies"
      }
     ],
     "rowsOrder": "random"
    }
   ]
  },
  {
   "name": "explanation_ioed",
   "elements": [
	{
     "type": "html",
     "name": "explanation_ins",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n<p>\nNow, I would like to probe your knowledge more closely on one of the topics you rated in before. Please describe all the details you know about cryptocurrencies, going from the first step to the last, providing causal connections between steps. That is, your explanation should reflect precisely how each step causes the next step in one continuous chain from start to finish (e.g. how cryptocurrencies are created, distributed, exchanged, etc.). In other words, try to tell as complete a story as you can, with no gaps.\n</br>\n</br>\nPlease take your time, as we expect your best explanation.</p>\n</br>\n</br>\n<p style=\"font-size:18px\">How does the cryptocurrency system work?</p>\n</body>\n</html>\n"
    },
	{
     "type": "comment",
     "name": "explanation_textbox",
     "isRequired": true,
     "titleLocation": "hidden"
    }
   ]
  },
  {
   "name": "post_rating",
   "elements": [
    {
     "type": "html",
     "name": "post_rating_inst",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n<p>\nNow, please rate again your knowledge on the topic you just provided a written explanation using the 7-point understanding scale.</p>\n</body>\n</html>\n"
    },
    {
     "type": "matrix",
     "name": "post_rating_score",
     "indent": 1,
     "isRequired": true,
     "titleLocation": "hidden",
     "columns": [
      {
       "value": "1",
       "text": "1 Vague Understanding"
      },
      "2",
      "3",
      {
       "value": "4",
       "text": "4 Intermediate Understanding"
      },
      "5",
      "6",
      {
       "value": "7",
       "text": "7 Complete Understanding"
      }
     ],
     "rows": [
      {
       "value": "crypto",
       "text": "Cryptocurrencies"
      }
     ],
     "rowsOrder": "random"
    }
   ]
  },
  {
   "name": "attitude_scale",
   "elements": [
	{
     "type": "html",
     "name": "attitude_inst",
     "html": "In this section, please rate the items in the table below indicating the extend to which you agree or disagree to each of the topics. For example, if you totally agree with the subject, please put a \"7\" (totally agree) on the likert scale next to it. On the contrary, if you totally disagree with the subject, please put a \"1\" (totally disagree) on the likert scale next to it. In case you don't hold an opinion on the topic, please put a \"4\" (uncertain) on the likert scale. "
    },
    {
     "type": "matrix",
     "name": "attitude_scores",
     "indent": 1,
     "isRequired": true,
     "titleLocation": "hidden",
     "columns": [
      {
       "value": "1",
       "text": "1 Totally disagree"
      },
      "2",
      "3",
      {
       "value": "4",
       "text": "4 Uncertain"
      },
      "5",
      "6",
      {
       "value": "7",
       "text": "7 Totally agree"
      }
     ],
     "rows": [
      {
       "value": "vaxxer",
       "text": "Anti-vaxxers (Vaccine Hesitancy)"
      },
      {
       "value": "n_energy",
       "text": "Nuclear Energy"
      },
      {
       "value": "vegan",
       "text": "Vegan Diet"
      },
      {
       "value": "gmo",
       "text": "Genetically Modified Organisms (GMO)"
      },
      {
       "value": "euthanasia",
       "text": "Euthanasia (assisted dying by medical personnel)"
      },
      {
       "value": "homeo",
       "text": "Homeopathy"
      },
      {
       "value": "abortion",
       "text": "Abortion"
      },
      {
       "value": "crypto",
       "text": "Cryptocurrencies"
      },
      {
       "value": "brexit",
       "text": "Brexit"
      },
      {
       "value": "un",
       "text": "European Union"
      }
     ],
     "rowsOrder": "random"
    }
   ]
  },
  {
   "name": "valence",
   "elements": [
    {
     "type": "html",
     "name": "valence_inst",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n<p>\nFinally, please indicate how positively/negatively framed was the news piece you read before on the topic <b>cryptocurrencies</b>.\n</p>\n</body>\n</html>\n"
    },
    {
     "type": "matrix",
     "name": "valence_score",
     "indent": 1,
     "isRequired": true,
     "titleLocation": "hidden",
     "columns": [
      {
       "value": "1",
       "text": "1 Completely negative"
      },
      "2",
      "3",
      {
       "value": "4",
       "text": "4 Neutral"
      },
      "5",
      "6",
      {
       "value": "7",
       "text": "7 Completely positive"
      }
     ],
     "rows": [
      {
       "value": "crypto",
       "text": "Cryptocurrencies"
      }
     ],
     "rowsOrder": "random"
    }
   ]
  },
  {
   "name": "demographics",
   "elements": [
    {
     "type": "html",
     "name": "question11",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n<p>To obtain a better analysis of the results, please answer following questions.\n</p>\n</body>\n</html>\n"
    },
    {
     "type": "text",
     "name": "age",
     "title": "Age (in years):",
     "isRequired": true
    },
    {
     "type": "dropdown",
     "name": "gender",
     "title": "Gender:",
     "choices": [
      {
       "value": "f",
       "text": "Female"
      },
      {
       "value": "m",
       "text": "Male"
      },
      {
       "value": "o",
       "text": "Other"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "education",
     "title": "Level of Education:",
     "choices": [
      {
       "value": "1",
       "text": "Graduated high school"
      },
      {
       "value": "2",
       "text": "Graduated college"
      },
      {
       "value": "3",
       "text": "Higher degree"
      }
     ]
    },
    {
     "type": "text",
     "name": "language",
     "title": "Native languages:",
     "description": "(i.e., The language spoken at home when you were a child)"
    }
   ]
  }
 ]
}


function sendDataToServer(survey) {
    survey.sendResult('217b9bba-1615-4e53-b4b0-86b953c73854');
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});
