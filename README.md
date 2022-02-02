## Requirements ✔️

- The code is written in Node.js using express framework.
- The endpoint handles an HTTP POST request.
- The upto date repo is publicly available in GitHub

## Deliverables ✔️

- The public repo URL.
- A working RESTful API.

Example result for sending the following JSON Body to the API endpoint.

```
Request payload:
{
    "startDate": "2016-01-26",
    "endDate": "2018-02-02",
    "minCount": 2700,
    "maxCount": 3000
}
```

```
Response payload:
{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "key": "ibfRLaFT",
            "createdAt": "2016-12-25T16:43:27.909Z",
            "totalCount": 2892
        },
        {
            "key": "pxClAvll",
            "createdAt": "2016-12-19T10:00:40.050Z",
            "totalCount": 2772
        },
        {
            "key": "XCiSazeS",
            "createdAt": "2016-12-13T18:58:33.864Z",
            "totalCount": 2906
        },
        {
            "key": "kzSqsBrJ",
            "createdAt": "2016-12-02T15:07:30.465Z",
            "totalCount": 2803
        },
        {
            "key": "KYKAKxDr",
            "createdAt": "2016-11-27T00:30:34.725Z",
            "totalCount": 2713
        },
        {
            "key": "IAuxBQIS",
            "createdAt": "2016-11-25T17:55:12.341Z",
            "totalCount": 2769
        },
        {
            "key": "tyqnxHZh",
            "createdAt": "2016-11-25T14:14:46.048Z",
            "totalCount": 2872
        },
        {
            "key": "uLQICSdH",
            "createdAt": "2016-11-23T23:55:44.449Z",
            "totalCount": 2716
        },
        {
            "key": "cijrnGIJ",
            "createdAt": "2016-11-23T19:10:56.950Z",
            "totalCount": 2984
        },
        {
            "key": "cijrnGIJ",
            "createdAt": "2016-11-23T19:10:56.950Z",
            "totalCount": 2984
        },
        {
            "key": "plaqeWiK",
            "createdAt": "2016-11-20T07:45:28.618Z",
            "totalCount": 2773
        },
        {
            "key": "jOjBYTLV",
            "createdAt": "2016-11-13T19:54:23.677Z",
            "totalCount": 2954
        },
        {
            "key": "rtKEKONd",
            "createdAt": "2016-11-04T17:16:08.542Z",
            "totalCount": 2723
        },
        {
            "key": "fEWwrjug",
            "createdAt": "2016-10-30T22:49:27.236Z",
            "totalCount": 2935
        },
        {
            "key": "plSuXweN",
            "createdAt": "2016-10-25T11:36:28.069Z",
            "totalCount": 2970
        },
        {
            "key": "VAbAYJgn",
            "createdAt": "2016-10-24T05:57:07.370Z",
            "totalCount": 2971
        },
        {
            "key": "dNzXijip",
            "createdAt": "2016-10-05T21:39:15.288Z",
            "totalCount": 2963
        },
        {
            "key": "gtOhweII",
            "createdAt": "2016-09-27T16:51:55.223Z",
            "totalCount": 2878
        },
        {
            "key": "YUhMrgmc",
            "createdAt": "2016-09-25T09:55:20.813Z",
            "totalCount": 2862
        },
        {
            "key": "kxMfldnX",
            "createdAt": "2016-09-21T04:41:32.835Z",
            "totalCount": 2971
        },
        {
            "key": "UFYsJHDM",
            "createdAt": "2016-09-06T04:08:44.393Z",
            "totalCount": 2951
        },
        {
            "key": "yoDNIfdV",
            "createdAt": "2016-09-02T22:47:37.049Z",
            "totalCount": 2780
        },
        {
            "key": "brcWXLkc",
            "createdAt": "2016-08-22T09:16:07.431Z",
            "totalCount": 2780
        },
        {
            "key": "cUZMtDFd",
            "createdAt": "2016-08-22T07:54:11.729Z",
            "totalCount": 2759
        },
        {
            "key": "KrZIErky",
            "createdAt": "2016-08-15T01:12:05.989Z",
            "totalCount": 2993
        },
        {
            "key": "KrZIErky",
            "createdAt": "2016-08-15T01:12:05.989Z",
            "totalCount": 2992
        },
        {
            "key": "ckHeLNbV",
            "createdAt": "2016-07-17T23:23:20.261Z",
            "totalCount": 2788
        },
        {
            "key": "ckHeLNbV",
            "createdAt": "2016-07-17T23:23:20.261Z",
            "totalCount": 2788
        },
        {
            "key": "eaeVCokN",
            "createdAt": "2016-07-14T01:45:13.255Z",
            "totalCount": 2920
        },
        {
            "key": "zZBGKskQ",
            "createdAt": "2016-06-30T01:39:35.456Z",
            "totalCount": 2730
        },
        {
            "key": "HmsYvNTB",
            "createdAt": "2016-06-12T21:50:44.088Z",
            "totalCount": 2917
        },
        {
            "key": "LRgJxDop",
            "createdAt": "2016-06-10T21:40:36.359Z",
            "totalCount": 2863
        },
        {
            "key": "HJGWkdmD",
            "createdAt": "2016-06-08T13:28:10.965Z",
            "totalCount": 2718
        },
        {
            "key": "DIalotCF",
            "createdAt": "2016-06-06T02:00:18.387Z",
            "totalCount": 2744
        },
        {
            "key": "wPpaIkGA",
            "createdAt": "2016-06-04T08:07:22.109Z",
            "totalCount": 2987
        },
        {
            "key": "xKTZIiIb",
            "createdAt": "2016-05-18T09:30:12.447Z",
            "totalCount": 2849
        },
        {
            "key": "xKTZIiIb",
            "createdAt": "2016-05-18T09:30:12.447Z",
            "totalCount": 2849
        },
        {
            "key": "nfzwhnJm",
            "createdAt": "2016-05-15T23:21:00.153Z",
            "totalCount": 2719
        },
        {
            "key": "udZfCkvB",
            "createdAt": "2016-05-15T00:36:34.126Z",
            "totalCount": 2701
        },
        {
            "key": "buCwWkpp",
            "createdAt": "2016-04-19T11:00:36.397Z",
            "totalCount": 2731
        },
        {
            "key": "MhXsNtaT",
            "createdAt": "2016-04-17T01:06:48.972Z",
            "totalCount": 2942
        },
        {
            "key": "mVHGbEap",
            "createdAt": "2016-04-11T03:16:28.581Z",
            "totalCount": 2853
        },
        {
            "key": "HYiwsPjw",
            "createdAt": "2016-04-05T17:07:46.062Z",
            "totalCount": 2977
        },
        {
            "key": "ohsXfpHi",
            "createdAt": "2016-03-30T20:01:01.948Z",
            "totalCount": 2894
        },
        {
            "key": "xwqjExMK",
            "createdAt": "2016-03-27T09:36:31.788Z",
            "totalCount": 2783
        },
        {
            "key": "wIFZewQA",
            "createdAt": "2016-03-18T23:32:55.236Z",
            "totalCount": 2863
        },
        {
            "key": "rwghjfLQ",
            "createdAt": "2016-03-17T11:07:46.355Z",
            "totalCount": 2907
        },
        {
            "key": "HNUPzQoW",
            "createdAt": "2016-03-17T09:47:23.943Z",
            "totalCount": 2931
        },
        {
            "key": "HNUPzQoW",
            "createdAt": "2016-03-17T09:47:23.943Z",
            "totalCount": 2931
        },
        {
            "key": "HCJREfLN",
            "createdAt": "2016-03-03T08:22:47.537Z",
            "totalCount": 2970
        },
        {
            "key": "HCJREfLN",
            "createdAt": "2016-03-03T08:22:47.537Z",
            "totalCount": 2970
        },
        {
            "key": "vZZOIiPi",
            "createdAt": "2016-03-02T09:30:26.664Z",
            "totalCount": 2701
        },
        {
            "key": "UlDFSFPv",
            "createdAt": "2016-03-02T09:30:11.209Z",
            "totalCount": 2735
        },
        {
            "key": "dcJUSDLR",
            "createdAt": "2016-02-27T16:12:30.813Z",
            "totalCount": 2780
        },
        {
            "key": "tQeCgNPH",
            "createdAt": "2016-02-24T08:17:05.921Z",
            "totalCount": 2783
        },
        {
            "key": "tQeCgNPH",
            "createdAt": "2016-02-24T08:17:05.921Z",
            "totalCount": 2783
        },
        {
            "key": "wtSjVcpg",
            "createdAt": "2016-02-22T11:13:43.165Z",
            "totalCount": 2888
        },
        {
            "key": "kkxEdhft",
            "createdAt": "2016-02-19T06:35:39.409Z",
            "totalCount": 2980
        },
        {
            "key": "UYOsBBSI",
            "createdAt": "2016-02-14T15:31:29.518Z",
            "totalCount": 2948
        },
        {
            "key": "fYwcJdst",
            "createdAt": "2016-02-12T10:01:57.502Z",
            "totalCount": 2790
        },
        {
            "key": "fYwcJdst",
            "createdAt": "2016-02-12T10:01:57.502Z",
            "totalCount": 2790
        },
        {
            "key": "bxoQiSKL",
            "createdAt": "2016-01-29T01:59:53.494Z",
            "totalCount": 2991
        },
        {
            "key": "NOdGNUDn",
            "createdAt": "2016-01-28T07:10:33.558Z",
            "totalCount": 2813
        }
    ]
}
```

---

# How to use?

You should send a request to with a valid JSON payload.
A valid payload consists of four parameters. `startDate`, `endDate`, `minCount` and `maxCount`.

If you provide a valid payload it will deliver the correct result as intended.

## Sample inputs and outputs

```
Request payload: (minCount is greater than maxCount)
{
"startDate": "2016-01-26", "endDate": "2018-02-02", "minCount": 3100, "maxCount": 3000
}
```

```
Response payload:
{
    "code": 2,
    "msg": "Minimum value is greater than maximum value or vice versa."
}
```
---

### Footer note
The app is to be run locally. Changing the port in app.js
