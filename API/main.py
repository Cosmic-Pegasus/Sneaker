from flask import Flask, jsonify
from flask_cors import CORS
app = Flask(__name__)

CORS(app)
@app.route('/')
def Details():
    return {
        
       "Details": [ 
        {
      "Brand": "JORDAN",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e24cc9da-a136-4262-987d-ab1a435cade1/air-jordan-1-retro-high-og-shoes-1QP6Gw.png",
      "Name": "Air Jordan 1 Retro High OG",
      "Rate": "$255",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "description": "Air Jordan 1 Retro High OG",
      "Redirect": "/AirJordan1RetroHighOG"
    },
    {
      "Brand": "JORDAN",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e2303611-ac1e-4591-b3a6-a07960ea2a4e/air-jordan-13-retro-shoe-pvTjVke9.png",
      "Name": "Air Jordan 13 Retro",
      "description": "Air Jordan 13 Retro",
      "Rate": "$285",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "Redirect": "/AirJordan13Retro",
    },
    {
      "Brand": "Jordan",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50a78a96-ece6-49d1-8a60-f9516be7b5d7/jumpman-two-trey-shoes-rhmBzG.png",
      "Name": "Jumpman Two Trey",
      "description": "Jumpman Two Trey",
      "Rate": "$600",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "Redirect": "/JumpmanTwoTrey",
    },
    {
      "Brand": "Nike",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/661d7e07-883e-4114-b7dc-a2810361e62f/zion-2-pf-basketball-shoes-ShHnSF.png",
      "Name": "Zion 2 PF",
      "description": "Zion 2 PF",
      "Rate": "$600",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "Redirect": "/JumpmanTwoTrey",
    },
    {
      "Brand": "JORDAN",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7aa0c4e1-408f-436a-81b5-88c671336c80/jordan-system23-shoes-f2trlS.png",
      "Name": "Jordan System 23",
      "description": "Jordan System 23",
      "Rate": "$189",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "Redirect": "/JordanSystem23",
    },
    {
      "Brand": "Nike",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d518c6d1-7e93-437a-bc1b-018f2e468612/air-jordan-5-retro-low-psg-shoes-bpsqMw.png",
      "Name": "Air Jordan 5 Retro",
      "description": "Air Jordan 5 Retro",
      "Rate": "$800",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "Redirect": "/AirJordan5Retro",
    },
    {
      "Brand": "Jordan",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50a78a96-ece6-49d1-8a60-f9516be7b5d7/jumpman-two-trey-shoes-rhmBzG.png",
      "Name": "Jumpman Two Trey",
      "description": "Jumpman Two Trey",
      "Rate": "$600",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "Redirect": "/JumpmanTwoTrey",
    },
    {
      "Brand": "Nike",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5fec1c09-a65c-4c3e-b5c2-0e669990ebc2/air-jordan-xxxvii-older-shoes-MK0JNJ.png",
      "Name": "Air Jordan XXXVII",
      "description": "Air Jordan XXXVII",
      "Rate": "$205",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "Redirect": "/AirJordanXXXVII"
    }
        ]
    }
    
@app.route('/men')
def men():
    return {
        
        "Details": [ 
        {
      "Brand": "JORDAN",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e24cc9da-a136-4262-987d-ab1a435cade1/air-jordan-1-retro-high-og-shoes-1QP6Gw.png",
      "Name": "Air Jordan 1 Retro High OG",
      "Rate": "$255",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "description": "Air Jordan 1 Retro High OG",
      "Redirect": "/AirJordan1RetroHighOG"
    },
    {
      "Brand": "JORDAN",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e2303611-ac1e-4591-b3a6-a07960ea2a4e/air-jordan-13-retro-shoe-pvTjVke9.png",
      "Name": "Air Jordan 13 Retro",
      "description": "Air Jordan 13 Retro",
      "Rate": "$285",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "Redirect": "/AirJordan13Retro",
    },
    {
      "Brand": "Jordan",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50a78a96-ece6-49d1-8a60-f9516be7b5d7/jumpman-two-trey-shoes-rhmBzG.png",
      "Name": "Jumpman Two Trey",
      "description": "Jumpman Two Trey",
      "Rate": "$600",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "Redirect": "/JumpmanTwoTrey",
    },
    {
      "Brand": "Nike",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/661d7e07-883e-4114-b7dc-a2810361e62f/zion-2-pf-basketball-shoes-ShHnSF.png",
      "Name": "Zion 2 PF",
      "description": "Zion 2 PF",
      "Rate": "$600",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "Redirect": "/JumpmanTwoTrey",
    },
    {
      "Brand": "JORDAN",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7aa0c4e1-408f-436a-81b5-88c671336c80/jordan-system23-shoes-f2trlS.png",
      "Name": "Jordan System 23",
      "description": "Jordan System 23",
      "Rate": "$189",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "Redirect": "/JordanSystem23",
    },
    {
      "Brand": "Nike",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d518c6d1-7e93-437a-bc1b-018f2e468612/air-jordan-5-retro-low-psg-shoes-bpsqMw.png",
      "Name": "Air Jordan 5 Retro",
      "description": "Air Jordan 5 Retro",
      "Rate": "$800",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "Redirect": "/AirJordan5Retro",
    },
    {
      "Brand": "Jordan",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50a78a96-ece6-49d1-8a60-f9516be7b5d7/jumpman-two-trey-shoes-rhmBzG.png",
      "Name": "Jumpman Two Trey",
      "description": "Jumpman Two Trey",
      "Rate": "$600",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "Redirect": "/JumpmanTwoTrey",
    },
    {
      "Brand": "Nike",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5fec1c09-a65c-4c3e-b5c2-0e669990ebc2/air-jordan-xxxvii-older-shoes-MK0JNJ.png",
      "Name": "Air Jordan XXXVII",
      "description": "Air Jordan XXXVII",
      "Rate": "$205",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "Redirect": "/AirJordanXXXVII"
    }
        ]
    }
    
@app.route('/women')
def women():
    return {
        
        "Details": [ 
        {
      "Brand": "JORDAN",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e24cc9da-a136-4262-987d-ab1a435cade1/air-jordan-1-retro-high-og-shoes-1QP6Gw.png",
      "Name": "Air Jordan 1 Retro High OG",
      "Rate": "$255",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "description": "Air Jordan 1 Retro High OG",
      "Redirect": "/AirJordan1RetroHighOG"
    },
    {
      "Brand": "JORDAN",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e2303611-ac1e-4591-b3a6-a07960ea2a4e/air-jordan-13-retro-shoe-pvTjVke9.png",
      "Name": "Air Jordan 13 Retro",
      "description": "Air Jordan 13 Retro",
      "Rate": "$285",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "Redirect": "/AirJordan13Retro",
    },
    {
      "Brand": "Jordan",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50a78a96-ece6-49d1-8a60-f9516be7b5d7/jumpman-two-trey-shoes-rhmBzG.png",
      "Name": "Jumpman Two Trey",
      "description": "Jumpman Two Trey",
      "Rate": "$600",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "Redirect": "/JumpmanTwoTrey",
    },
    {
      "Brand": "Nike",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/661d7e07-883e-4114-b7dc-a2810361e62f/zion-2-pf-basketball-shoes-ShHnSF.png",
      "Name": "Zion 2 PF",
      "description": "Zion 2 PF",
      "Rate": "$600",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "Redirect": "/JumpmanTwoTrey",
    },
    {
      "Brand": "JORDAN",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7aa0c4e1-408f-436a-81b5-88c671336c80/jordan-system23-shoes-f2trlS.png",
      "Name": "Jordan System 23",
      "description": "Jordan System 23",
      "Rate": "$189",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "Redirect": "/JordanSystem23",
    },
    {
      "Brand": "Nike",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d518c6d1-7e93-437a-bc1b-018f2e468612/air-jordan-5-retro-low-psg-shoes-bpsqMw.png",
      "Name": "Air Jordan 5 Retro",
      "description": "Air Jordan 5 Retro",
      "Rate": "$800",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "Redirect": "/AirJordan5Retro",
    },
    {
      "Brand": "Jordan",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50a78a96-ece6-49d1-8a60-f9516be7b5d7/jumpman-two-trey-shoes-rhmBzG.png",
      "Name": "Jumpman Two Trey",
      "description": "Jumpman Two Trey",
      "Rate": "$600",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "Redirect": "/JumpmanTwoTrey",
    },
    {
      "Brand": "Nike",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5fec1c09-a65c-4c3e-b5c2-0e669990ebc2/air-jordan-xxxvii-older-shoes-MK0JNJ.png",
      "Name": "Air Jordan XXXVII",
      "description": "Air Jordan XXXVII",
      "Rate": "$205",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s",
      "Redirect": "/AirJordanXXXVII"
    }
        ]
    }
    
@app.route('/casual')
def casual():
    return {
        
       "Details": [ 
        {
      "Brand": "JORDAN",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e24cc9da-a136-4262-987d-ab1a435cade1/air-jordan-1-retro-high-og-shoes-1QP6Gw.png",
      "Name": "Air Jordan 1 Retro High OG",
      "Rate": "$255",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    },
    {
      "Brand": "JORDAN",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e2303611-ac1e-4591-b3a6-a07960ea2a4e/air-jordan-13-retro-shoe-pvTjVke9.png",
      "Name": "Air Jordan 13 Retro",
      "Rate": "$285",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    },
    {
      "Brand": "Jordan",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50a78a96-ece6-49d1-8a60-f9516be7b5d7/jumpman-two-trey-shoes-rhmBzG.png",
      "Name": "Jumpman Two Trey",
      "Rate": "$600",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    },
    {
      "Brand": "Nike",
      "Img": "https://cdn.vox-cdn.com/thumbor/RQUHPUyQQsHbz4b3_tE6opIB2sk=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/12915291/LeBron161.jpg",
      "Name": "Lebron Soldier XVI",
      "Rate": "$600",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    },
    {
      "Brand": "JORDAN",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7aa0c4e1-408f-436a-81b5-88c671336c80/jordan-system23-shoes-f2trlS.png",
      "Name": "Jordan System 23",
      "Rate": "$189",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    },
    {
      "Brand": "Nike",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d518c6d1-7e93-437a-bc1b-018f2e468612/air-jordan-5-retro-low-psg-shoes-bpsqMw.png",
      "Name": "Air Jordan 5 Retro",
      "Rate": "$800",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    },
    {
      "Brand": "Jordan",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50a78a96-ece6-49d1-8a60-f9516be7b5d7/jumpman-two-trey-shoes-rhmBzG.png",
      "Name": "Jumpman Two Trey",
      "Rate": "$600",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    },
    {
      "Brand": "Nike",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5fec1c09-a65c-4c3e-b5c2-0e669990ebc2/air-jordan-xxxvii-older-shoes-MK0JNJ.png",
      "Name": "Air Jordan XXXVII",
      "Rate": "$205",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    }
        ]
    }
    
@app.route('/hots')
def hots():
    return {
        
       "Details": [ 
        {
      "Brand": "JORDAN",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e24cc9da-a136-4262-987d-ab1a435cade1/air-jordan-1-retro-high-og-shoes-1QP6Gw.png",
      "Name": "Air Jordan 1 Retro High OG",
      "Rate": "$255",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    },
    {
      "Brand": "JORDAN",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e2303611-ac1e-4591-b3a6-a07960ea2a4e/air-jordan-13-retro-shoe-pvTjVke9.png",
      "Name": "Air Jordan 13 Retro",
      "Rate": "$285",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    },
    {
      "Brand": "Jordan",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50a78a96-ece6-49d1-8a60-f9516be7b5d7/jumpman-two-trey-shoes-rhmBzG.png",
      "Name": "Jumpman Two Trey",
      "Rate": "$600",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    },
    {
      "Brand": "Nike",
      "Img": "https://cdn.vox-cdn.com/thumbor/RQUHPUyQQsHbz4b3_tE6opIB2sk=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/12915291/LeBron161.jpg",
      "Name": "Lebron Soldier XVI",
      "Rate": "$600",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    },
    {
      "Brand": "JORDAN",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7aa0c4e1-408f-436a-81b5-88c671336c80/jordan-system23-shoes-f2trlS.png",
      "Name": "Jordan System 23",
      "Rate": "$189",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    },
    {
      "Brand": "Nike",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d518c6d1-7e93-437a-bc1b-018f2e468612/air-jordan-5-retro-low-psg-shoes-bpsqMw.png",
      "Name": "Air Jordan 5 Retro",
      "Rate": "$800",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    },
    {
      "Brand": "Jordan",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50a78a96-ece6-49d1-8a60-f9516be7b5d7/jumpman-two-trey-shoes-rhmBzG.png",
      "Name": "Jumpman Two Trey",
      "Rate": "$600",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    },
    {
      "Brand": "Nike",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5fec1c09-a65c-4c3e-b5c2-0e669990ebc2/air-jordan-xxxvii-older-shoes-MK0JNJ.png",
      "Name": "Air Jordan XXXVII",
      "Rate": "$205",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    }
        ]
    }
    
@app.route('/newArrival')
def newArrival():
    return {
        
       "Details": [ 
        {
      "Brand": "JORDAN",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e24cc9da-a136-4262-987d-ab1a435cade1/air-jordan-1-retro-high-og-shoes-1QP6Gw.png",
      "Name": "Air Jordan 1 Retro High OG",
      "Rate": "$255",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    },
    {
      "Brand": "JORDAN",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e2303611-ac1e-4591-b3a6-a07960ea2a4e/air-jordan-13-retro-shoe-pvTjVke9.png",
      "Name": "Air Jordan 13 Retro",
      "Rate": "$285",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    },
    {
      "Brand": "Jordan",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50a78a96-ece6-49d1-8a60-f9516be7b5d7/jumpman-two-trey-shoes-rhmBzG.png",
      "Name": "Jumpman Two Trey",
      "Rate": "$600",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    },
    {
      "Brand": "Nike",
      "Img": "https://cdn.vox-cdn.com/thumbor/RQUHPUyQQsHbz4b3_tE6opIB2sk=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/12915291/LeBron161.jpg",
      "Name": "Lebron Soldier XVI",
      "Rate": "$600",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    },
    {
      "Brand": "JORDAN",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7aa0c4e1-408f-436a-81b5-88c671336c80/jordan-system23-shoes-f2trlS.png",
      "Name": "Jordan System 23",
      "Rate": "$189",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    },
    {
      "Brand": "Nike",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d518c6d1-7e93-437a-bc1b-018f2e468612/air-jordan-5-retro-low-psg-shoes-bpsqMw.png",
      "Name": "Air Jordan 5 Retro",
      "Rate": "$800",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    },
    {
      "Brand": "Jordan",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50a78a96-ece6-49d1-8a60-f9516be7b5d7/jumpman-two-trey-shoes-rhmBzG.png",
      "Name": "Jumpman Two Trey",
      "Rate": "$600",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    },
    {
      "Brand": "Nike",
      "Img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5fec1c09-a65c-4c3e-b5c2-0e669990ebc2/air-jordan-xxxvii-older-shoes-MK0JNJ.png",
      "Name": "Air Jordan XXXVII",
      "Rate": "$205",
      "url": "https://www.youtube.com/watch?v=Jzv3G5iDLvw&t=764s"
    }
        ]
    }
    
if __name__ == "__main__":
    app.run(debug=True)
    
    