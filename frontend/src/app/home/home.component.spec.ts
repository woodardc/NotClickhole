import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../shared';
import { CoreModule, NewsItem } from '../core';
import 'rxjs/add/operator/filter';
import { FeedComponent } from './feed/feed.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, CoreModule],
      declarations: [HomeComponent, FeedCardComponent, FeedComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('Entering search, it should filter news items correctly', () => {
    var data = 
    [
     {
        "title": "Breaking: Trump's turtle ate a strawberry",
        "user": "woodardc",
        "time": "2018-07-22T07:14:14Z",
        "time_ago": "6",
        "comments_count": 0,
        "type": "news",
        "url": "https://www.google.com",
        "domain": ".",
        "points": 1
    },
    {
        "title": "8 Kittens That God Forbid Could Be Used To Prop Up A Wobbly Table",
        "user": "gerblet",
        "time": null,
        "time_ago": "",
        "comments_count": null,
        "type": "",
        "url": "https://lifestyle.clickhole.com/8-kittens-that-god-forbid-could-be-used-to-prop-up-a-wo-1825121569",
        "domain": "Only a complete monster would put one of these cuddly cuties under a table leg, but they would definitely work if worst comes to worst.",
        "points": null
    },
    {
        "title": "Don't Understand Net Neutrality Since That Horse Kicked You In The Head? Hush Now, And Look At The River",
        "user": "moralesc",
        "time": null,
        "time_ago": "",
        "comments_count": null,
        "type": "",
        "url": "https://www.clickhole.com/don-t-understand-net-neutrality-since-that-horse-kicked-1826740809",
        "domain": "Having trouble understanding the nuances of net neutrality regulation ever since that horse kicked you upside the head? That’s just fine—you relax and look out at the river, now. Look it how the light sparkles off it just right, and don’t you turn around to look at me now, you hear?",
        "points": null
    },
    {
        "title": "7 Foolproof Tips For Passing Your Daughter Off As A Crawfish So You Only Have To Buy One Disneyland Pass",
        "user": "woodardc",
        "time": null,
        "time_ago": "",
        "comments_count": null,
        "type": "",
        "url": "https://www.clickhole.com/7-foolproof-tips-for-passing-your-daughter-off-as-a-cra-1826369348",
        "domain": "After a few days in Disneyland, your children will love you forever, but your bank account may never forgive you. Luckily, there’s a neat trick that can help you cut some serious costs from your trip. Here are seven simple tips for passing your daughter off as a crawfish so you can get away with only buying a single pass.",
        "points": null
    },
    {
        "title": "Okay, Ghost Masters! Now You Will Finally Gather Around The Campfire To Tell Us A Scary Story In The Comments Section In Order To Make Us Scream",
        "user": "moralesc",
        "time": null,
        "time_ago": "",
        "comments_count": null,
        "type": "",
        "url": "https://www.clickhole.com/okay-ghost-masters-now-you-will-finally-gather-around-1825539652",
        "domain": "Calling all masters of horror! Darkness has fallen in the horrifying woods, and it’s time to swap tales of terror around the campfire in order to make us scream. Ghosts! Goblins! Animals with the legs of a man! Ancient monsters from beyond the farthest reaches space and time! All of the frights in your mind! We want to hear about it all and shriek with fear in the flickering light of the fire.\r\n\r\nIf your story is so scary that it drives us mad with fear, we’ll reply to your comment with a hand-drawn monster to scare you!",
        "points": null
    },
    {
        "title": "Raspberry Pi supercomputers: From DIY clusters to 750-board monsters",
        "user": "gerblet",
        "time": null,
        "time_ago": "",
        "comments_count": null,
        "type": "",
        "url": "https://www.techrepublic.com/article/raspberry-pi-supercomputers-from-diy-clusters-to-750-board-monsters/",
        "domain": "The Pi clusters that push the $35 board to its limits.",
        "points": null
    }
    ];
    var stringed = JSON.stringify(data);
    var news = JSON.parse(stringed);
    component.news = news;
    component.loading = false;
    var debugValue = "turtle";
    var NewsDataFiltered = news.filter(component.Filterer.bind(component, debugValue));
    
    console.log(NewsDataFiltered);
    expect(NewsDataFiltered.length).toBe(1);
    expect(component.loading).toBe(false);

  });
  
  
});
