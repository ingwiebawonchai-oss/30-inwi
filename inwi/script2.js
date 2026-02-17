function changePage(place){
    var menuFrame = parent.frames['menu'].document;
    var mainFrame = parent.frames['main'].document;
    
    var places = [
        'Gullfoss Waterfall',
        'Vatnajökull Glacier & Jökulsárlón Lagoon',
        'Reynisfjara Black Sand Beach',
        'Blue Lagoon',
        'Kirkjufell Mountain',
        'Credit'
    ];

    var topic = mainFrame.getElementById('topic');
    if (topic) topic.innerHTML = place;

    for (var i = 0; i < places.length; i++) {
        var btn = menuFrame.getElementById('a' + (i + 1));
        if (btn) btn.classList.remove('click');
    }

    var activeIdx = places.indexOf(place) + 1;
    var activeBtn = menuFrame.getElementById('a' + activeIdx);
    if (activeBtn) activeBtn.classList.add('click');

    var topic = mainFrame.getElementById('topic');
    var p = mainFrame.getElementById('p');
    var image = mainFrame.getElementById('image');
    var credit = mainFrame.getElementById('img_credit');
    if (topic) topic.textContent = place;
    if (place == "Gullfoss Waterfall"){
        if (p) p.innerHTML = "Gullfoss, or the \"Golden Falls,\" is a magnificent waterfall located in the canyon of the Hvítá River in southwest Iceland. The water originates from the Langjökull glacier and plunges 32 meters down in two dramatic stages into a deep, rugged crevice. This natural wonder is a primary stop on the Golden Circle route, famous for the rainbows that often dance above the mist on sunny days and its thunderous, awe-inspiring roar."+"<br><br><br>" + "Beyond its physical beauty, Gullfoss holds a significant place in Icelandic history as a symbol of environmental preservation. In the early 20th century, the waterfall was at risk of being harnessed for a hydroelectric power project, but local efforts successfully protected it for future generations. Today, visitors can enjoy various viewpoints along the canyon rim, witnessing the raw power of the glacial water as it carves through the ancient basalt landscape.";
        if (image) image.src = "images/01Gullfoss.jpg";
        if (image) image.alt = "Gullfoss";
        if (credit) credit.innerHTML = "https://www.ntounas.gr/gullfoss-waterfall-in-iceland/";
    }
    else if (place == "Vatnajökull Glacier & Jökulsárlón Lagoon"){
        if (p) p.innerHTML = "Vatnajökull is the largest glacier in Europe, a colossal ice cap that dominates the southeastern landscape of Iceland. Beneath its frozen surface lie some of the country’s most active volcanoes, creating a unique dynamic between fire and ice. The glacier feeds into numerous glacial tongues, the most spectacular of which leads to Jökulsárlón, a deep lagoon filled with luminous blue icebergs that have detached from the main ice mass."+"<br><br><br>"+"The Jökulsárlón lagoon serves as a gateway where these ancient icebergs float serenely toward the Atlantic Ocean. Many of these ice fragments eventually wash up on the nearby Diamond Beach, where they sit like glittering jewels against the stark black volcanic sand. This area offers a surreal experience for travelers, providing a front-row seat to the constant, shifting cycle of the Arctic environment and its breathtaking crystalline beauty.";
        if (image) image.src = "images/02Vatnajokull.jpg";
        if (image) image.alt = "Vatnojokull";
        if (credit) credit.innerHTML = "https://t3.ftcdn.net/jpg/03/22/47/78/240_F_322477822_VKjDQoPTYq1CJvEP79u00K1u2TNjVZfq.jpg";
    }
    else if (place == "Reynisfjara Black Sand Beach"){
        if (p) p.innerHTML = "Reynisfjara is widely regarded as the most beautiful example of Iceland’s black sand beaches, located near the southern village of Vík. The beach is characterized by its enormous basalt stacks, roaring Atlantic waves, and the stunning Garðar cliff, which features a vast array of hexagonal basalt columns. These geometric formations were created by cooling lava and now serve as a dramatic backdrop for the dark, moody coastline." + "<br><br><br>" + "The site is steeped in local folklore, with legends suggesting that the sea stacks known as Reynisdrangar were once trolls who were turned to stone by the rising sun. While the scenery is captivatingly beautiful, it is also a place of immense natural power; the beach is famous for its \"sneaker waves\" which can be exceptionally dangerous. The combination of dark myth, unique geology, and the powerful ocean makes Reynisfjara an unforgettable destination.";
        if (image) image.src = "images/03Reynisfjara.jpg";
        if (image) image.alt = "Reynisfjara Black Sand Beach";
        if (credit) credit.innerHTML = "https://share.google/images/u6vP8WfZ6gioVhnDq";
    }
    else if (place == "Blue Lagoon"){
        if (p) p.innerHTML = "The Blue Lagoon is a world-class geothermal spa situated in the heart of a jagged lava field on the Reykjanes Peninsula. Its milky-blue waters are rich in minerals like silica and sulfur, which are renowned for their skin-healing properties and vibrant aesthetic. The lagoon maintains an average temperature of 38°C (100°F), providing a relaxing, warm sanctuary that contrasts beautifully with the often-chilly Icelandic winds and dark volcanic surroundings." + "<br><br><br>" + "As a masterpiece of human ingenuity and natural resources, the water is actually a byproduct of the nearby Svartsengi geothermal power plant, making it a sustainable marvel. Guests can enjoy silica mud masks, steam rooms, and in-water massages while soaking in the ethereal blue glow. Whether under the glow of the Midnight Sun or the dancing Northern Lights, a visit to the Blue Lagoon is considered the ultimate Icelandic wellness experience.";
        if (image) image.src = "images/04BlueLagoon.jpg";
        if (image) image.alt = "Blue Lagoon";
        if (credit) credit.innerHTML = "https://i0.wp.com/mywanderlustdiary.com/wp-content/uploads/2017/01/ijsland-4.jpg?fit=3298%2C1728&ssl=1";
    }
    else if (place == "Kirkjufell Mountain"){
        if (p) p.innerHTML = "Kirkjufell, standing at 463 meters on the Snæfellsnes Peninsula, is famously known as the most photographed mountain in Iceland. Its unique, symmetrical shape resembles a church steeple or a witch's hat, making it an instantly recognizable landmark. Just across the road lies the Kirkjufellsfoss waterfall, which provides a perfect foreground for photographers looking to capture the mountain’s reflection alongside the cascading water." + "<br><br><br>" + "The mountain gained international fame as a filming location for Game of Thrones, where it was referred to as \"Arrowhead Mountain.\" Because of its isolated position jutting out into the sea, it offers a 360-degree view of the surrounding fjords and coastal beauty. Whether covered in the lush greens of summer or the stark white snows of winter, Kirkjufell remains a captivating symbol of the Icelandic wilderness.";
        if (image) image.src = "images/05Kirkjufell.jpg";
        if (image) image.alt = "Kirkjufell Mountain";
        if (credit) credit.innerHTML = "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/f15e/live/a5cacaf0-3e63-11ef-9e1c-3b4a473456a6.jpg.webp";
    }
    else if (place == "Credit"){
        if (p) p.innerHTML = "image url:<br><br>https://www.ntounas.gr/gullfoss-waterfall-in-iceland/ <br> https://t3.ftcdn.net/jpg/03/22/47/78/240_F_322477822_VKjDQoPTYq1CJvEP79u00K1u2TNjVZfq.jpg <br> https://share.google/images/u6vP8WfZ6gioVhnDq <br> https://i0.wp.com/mywanderlustdiary.com/wp-content/uploads/2017/01/ijsland-4.jpg?fit=3298%2C1728&ssl=1 <br> https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/f15e/live/a5cacaf0-3e63-11ef-9e1c-3b4a473456a6.jpg.webp <br> https://www.tourradar.com/t/234033";
        if (image) image.src = "";
        if (image) image.alt = "";
        if (credit) credit.innerHTML = "Inwi M2/16 No30";
    }
}


function switchMode(){
    var top = document;
    var main = parent.frames['main'].document;
    var menu = parent.frames['menu'].document;
    var mainbody = main.getElementById('one');
    var menubody = menu.getElementById('atag');
    var marq = main.getElementById('zoomin');
    var topic1 = main.getElementById('topic');
    var topic2 = top.getElementById('topic');
    var ff = top.getElementById('flip');
    var container = top.getElementById('container');
    var closebtn = main.getElementById('closebtn');
    var iceland = top.getElementById('iceland');
    var img_con = main.getElementById('img_con');
    var p = main.getElementById('p');
    var a1 = menu.getElementById('a1');
    var a2 = menu.getElementById('a2');
    var a3 = menu.getElementById('a3');
    var a4 = menu.getElementById('a4');
    var a5 = menu.getElementById('a5');
    var a6 = menu.getElementById('a6');
    var circle = top.getElementById('circle');
    var content = top.getElementById('content');


    mainbody.classList.toggle('dark');
    menubody.classList.toggle('dark');
    marq.classList.toggle('dark');
    topic1.classList.toggle('dark');
    topic2.classList.toggle('dark');
    ff.classList.toggle('dark');
    container.classList.toggle('dark');
    closebtn.classList.toggle('dark');
    iceland.classList.toggle('dark');
    img_con.classList.toggle('dark');
    p.classList.toggle('dark');
    a1.classList.toggle('dark');
    a2.classList.toggle('dark');
    a3.classList.toggle('dark');
    a4.classList.toggle('dark');
    a5.classList.toggle('dark');
    a6.classList.toggle('dark');
    circle.classList.toggle('dark');
    content.classList.toggle('dark');
}


