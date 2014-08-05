var UiTestMock={};
var UiTestMock = UiTestMock || {};
UiTestMock.LoanOfferTestData=[{
    "loan": 430000,
    "roi": 13,
    "tenure": 18
}, {
    "loan": 330000,
    "roi": 13,
    "tenure": 18
}];
UiTestMock.EmiCalcTestData = [{
    input: {
        loan: 100000,
        roi: 15,
        tenure: 12,

    },
    output: {
        emi: 9025,
        interest: 8309,
        totalAmount:108309,
        schedule: [{
            no: 1,
            principal: 7775.83,
            interest: 1250,
            balance: 92224.17,
            principalYtd: 7775.83
        }, {
            no: 2,
            principal: 7873.03,
            interest: 1152.8,
            balance: 84351.14,
            principalYtd: 15648.86
        }, {
            no: 3,
            principal: 7971.44,
            interest: 1054.39,
            balance: 76379.7,
            principalYtd: 23620.3
        }, {
            no: 4,
            principal: 8071.09,
            interest: 954.75,
            balance: 68308.61,
            principalYtd: 31691.39
        }, {
            no: 5,
            principal: 8171.97,
            interest: 853.86,
            balance: 60136.64,
            principalYtd: 39863.36
        }, {
            no: 6,
            principal: 8274.12,
            interest: 751.71,
            balance: 51862.52,
            principalYtd: 48137.48
        }, {
            no: 7,
            principal: 8377.55,
            interest: 648.28,
            balance: 43484.97,
            principalYtd: 56515.03
        }, {
            no: 8,
            principal: 8482.27,
            interest: 543.56,
            balance: 35002.7,
            principalYtd: 64997.3
        }, {
            no: 9,
            principal: 8588.3,
            interest: 437.53,
            balance: 26414.4,
            principalYtd: 73585.6
        }, {
            no: 10,
            principal: 8695.65,
            interest: 330.18,
            balance: 17718.75,
            principalYtd: 82281.25
        }, {
            no: 11,
            principal: 8804.35,
            interest: 221.48,
            balance: 8914.4,
            principalYtd: 91085.6
        }, {
            no: 12,
            principal: 8914.4,
            interest: 111.43,
            balance: 0,
            principalYtd: 100000
        }]
    }
}, {
    input: {
        loan: 400000,
        roi: 13,
        tenure: 18
    },
    output: {
        emi: 24579,
        interest: 42422,
        totalAmount:442422,
        schedule: [{
            no: 1,
            principal: 20245.7,
            interest: 4333.33,
            balance: 379754.3,
            principalYtd: 20245.7
        }, {
            no: 2,
            principal: 20465.03,
            interest: 4114,
            balance: 359289.26,
            principalYtd: 40710.74
        }, {
            no: 3,
            principal: 20686.74,
            interest: 3892.3,
            balance: 338602.53,
            principalYtd: 61397.47
        }, {
            no: 4,
            principal: 20910.84,
            interest: 3668.19,
            balance: 317691.68,
            principalYtd: 82308.32
        }, {
            no: 5,
            principal: 21137.38,
            interest: 3441.66,
            balance: 296554.31,
            principalYtd: 103445.69
        }, {
            no: 6,
            principal: 21366.37,
            interest: 3212.67,
            balance: 275187.94,
            principalYtd: 124812.06
        }, {
            no: 7,
            principal: 21597.83,
            interest: 2981.2,
            balance: 253590.11,
            principalYtd: 146409.89
        }, {
            no: 8,
            principal: 21831.81,
            interest: 2747.23,
            balance: 231758.3,
            principalYtd: 168241.7
        }, {
            no: 9,
            principal: 22068.32,
            interest: 2510.71,
            balance: 209689.97,
            principalYtd: 190310.03
        }, {
            no: 10,
            principal: 22307.4,
            interest: 2271.64,
            balance: 187382.58,
            principalYtd: 212617.42
        }, {
            no: 11,
            principal: 22549.06,
            interest: 2029.98,
            balance: 164833.52,
            principalYtd: 235166.48
        }, {
            no: 12,
            principal: 22793.34,
            interest: 1785.7,
            balance: 142040.18,
            principalYtd: 257959.82
        }, {
            no: 13,
            principal: 23040.27,
            interest: 1538.77,
            balance: 118999.91,
            principalYtd: 281000.09
        }, {
            no: 14,
            principal: 23289.87,
            interest: 1289.17,
            balance: 95710.04,
            principalYtd: 304289.96
        }, {
            no: 15,
            principal: 23542.18,
            interest: 1036.86,
            balance: 72167.86,
            principalYtd: 327832.14
        }, {
            no: 16,
            principal: 23797.22,
            interest: 781.82,
            balance: 48370.64,
            principalYtd: 351629.36
        }, {
            no: 17,
            principal: 24055.02,
            interest: 524.02,
            balance: 24315.62,
            principalYtd: 375684.38
        }, {
            no: 18,
            principal: 24315.62,
            interest: 263.42,
            balance: 0,
            principalYtd: 400000
        }]
    }
}, {
    input: {
        loan: 100,
        roi: 15,
        tenure: 12
    },
    output: {
        emi: 9,
        interest: 8,
        totalAmount:108,
        schedule: [{
            no: 1,
            principal: 7.78,
            interest: 1.25,
            balance: 92.22,
            principalYtd: 7.78
        }, {
            no: 2,
            principal: 7.87,
            interest: 1.15,
            balance: 84.35,
            principalYtd: 15.65
        }, {
            no: 3,
            principal: 7.97,
            interest: 1.05,
            balance: 76.38,
            principalYtd: 23.62
        }, {
            no: 4,
            principal: 8.07,
            interest: 0.95,
            balance: 68.31,
            principalYtd: 31.69
        }, {
            no: 5,
            principal: 8.17,
            interest: 0.85,
            balance: 60.14,
            principalYtd: 39.86
        }, {
            no: 6,
            principal: 8.27,
            interest: 0.75,
            balance: 51.86,
            principalYtd: 48.14
        }, {
            no: 7,
            principal: 8.38,
            interest: 0.65,
            balance: 43.48,
            principalYtd: 56.52
        }, {
            no: 8,
            principal: 8.48,
            interest: 0.54,
            balance: 35,
            principalYtd: 65
        }, {
            no: 9,
            principal: 8.59,
            interest: 0.44,
            balance: 26.41,
            principalYtd: 73.59
        }, {
            no: 10,
            principal: 8.7,
            interest: 0.33,
            balance: 17.72,
            principalYtd: 82.28
        }, {
            no: 11,
            principal: 8.8,
            interest: 0.22,
            balance: 8.91,
            principalYtd: 91.09
        }, {
            no: 12,
            principal: 8.91,
            interest: 0.11,
            balance: 0,
            principalYtd: 100
        }]
    }
}];
/*if (module && module.exports){
    module.exports=UiTestMock;
}*/
var UiTestMock = UiTestMock || {};
UiTestMock.MenuTestData=[  {
    text: "EMI Calculator",
    link: "emicalc",
    icon: "icon fa fa-inr"
}];
module.exports=UiTestMock;