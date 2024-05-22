module.exports = {
    mode: "jit",
    content:["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}","./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
    darkMode:"class",
    theme:{
        screens:{ md:{max:"1050px"}, sm: {max:"550px"} },
        extend:{
            colors:{
                black:{900:"#0f0f0f","900_02":"#000000","900_01":"#0b0a0a","900_cc":"#000000cc"},
                gray:{
                    100:"#f8f6f2",
                    200:"#eeeeee",
                    400:"#cac8c2",
                    500:"#999999",
                    600:"#777c84",
                    700:"#646464",
                    "400_01":"#cac2c2",
                    "200_01":"#f1f0f0",
                    "300_04":"#e6e1d6",
                    "300_02":"#e7e1d5",
                    "300_03":"#e2e2e2",
                    "300_01":"#e6e6e6",

                },
                deep_orange : {A700:"#fa1917"},
                orange:{100:"#fcdead"},
                white:{A700:"#ffffff", A700_4c:"#ffffff4c"},
                blue_gray:{50:"#f1f1f1", 100:"#d6d5d5",900:"#1b2834","100_01":"#cdcdcd"},
                teal:{400:"#389775"},
                green:{900:"#006f2c"},
                black_900_99:"#00000099",
            },
            boxShadow:{},
            fontFamily:{poppins:"Poppins",rubik:"Rubik",inter:"Inter"},
        },
    },
    plugins:[require("@tailwindcss/forms")],
};