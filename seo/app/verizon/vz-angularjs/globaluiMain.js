/***********************************************
 *******
 *******    Enterprise Header Service
 *******
 ***********************************************/
/*
 * @function getGlobalHeaderMenu
 * @description: return's JSON object of Menu
 */
function getGlobalHeaderMenu() {
    return [ {
  "title" : "VZWeb",
  "href" : "https://vzweb2.verizon.com",
  "newWindow" : false,
  "classes" : " vz-gui-icon vz-gui-icon-home",
  "active" : false,
  "submenu" : [ {
    "title" : "Home",
    "href" : "https://vzweb2.verizon.com",
    "newWindow" : false,
    "classes" : "vz-gui-visible-xs",
    "active" : false,
    "submenu" : null,
    "lib" : null,
    "extHref" : null
  }, {
    "title" : "Our Culture",
    "href" : "https://vzweb2.verizon.com",
    "newWindow" : false,
    "classes" : null,
    "active" : false,
    "submenu" : [ {
      "title" : "Compliance",
      "href" : "https://vzweb2.verizon.com/verizon-compliance",
      "newWindow" : false,
      "classes" : "vz-gui-icon-compliance",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-ourCulture-compliance",
      "extHref" : null
    }, {
      "title" : "Code Of Conduct",
      "href" : "https://vzweb2.verizon.com/sites/wireline/files/media/upload/conduct.pdf",
      "newWindow" : false,
      "classes" : "vz-gui-icon-code-conduct",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-ourCulture-codeConduct",
      "extHref" : null
    }, {
      "title" : "Commitment & Values",
      "href" : "https://vzweb2.verizon.com/our-commitment-values",
      "newWindow" : false,
      "classes" : "vz-gui-icon-commitment-values",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-ourCulture-commitmentValues",
      "extHref" : null
    }, {
      "title" : "Credo",
      "href" : "https://vzweb2.verizon.com/news/our-2015-credo-theme-and-priorities",
      "newWindow" : false,
      "classes" : "vz-gui-icon-credo",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-ourCulture-credo",
      "extHref" : null
    }, {
      "title" : "Diversity Strategy",
      "href" : "https://vzweb2.verizon.com/diversity-strategy",
      "newWindow" : false,
      "classes" : "vz-gui-icon-diversity-strategy",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-ourCulture-diversityStrategy",
      "extHref" : null
    }, {
      "title" : "Green & Sustainability",
      "href" : "https://vzweb2.verizon.com/content/sustainability",
      "newWindow" : false,
      "classes" : "vz-gui-icon-green-sustainability",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-ourCulture-greenSustainability",
      "extHref" : null
    }, {
      "title" : "Our Purpose",
      "href" : "https://vzweb2.verizon.com/node/41475",
      "newWindow" : false,
      "classes" : "vz-gui-icon-our-purpose",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-ourCulture-ourPurpose",
      "extHref" : null
    }, {
      "title" : "Verizon Awards",
      "href" : "http://www.verizon.com/about/our-company/awards-recognition/",
      "newWindow" : false,
      "classes" : "vz-gui-icon-verizon-awards",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-ourCulture-verizonAwards",
      "extHref" : null
    }, {
      "title" : "Verizon Foundation",
      "href" : "http://www.verizon.com/about/verizon-foundation/",
      "newWindow" : false,
      "classes" : "vz-gui-icon-verizon-foundation",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-ourCulture-verizonFoundation",
      "extHref" : null
    }, {
      "title" : "V2V",
      "href" : "https://vzweb2.verizon.com/v2v",
      "newWindow" : false,
      "classes" : "vz-gui-icon-v2v",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-ourCulture-v2v",
      "extHref" : null
    } ],
    "lib" : "menu-vzweb-whoWeAre-ourCulture",
    "extHref" : null
  }, {
    "title" : "Corporate Groups",
    "href" : "https://vzweb2.verizon.com",
    "newWindow" : false,
    "classes" : null,
    "active" : false,
    "submenu" : [ {
      "title" : "Chief Administrative Office",
      "href" : "https://vzweb2.verizon.com/content/chief-administrative-office",
      "newWindow" : false,
      "classes" : "vz-gui-icon-chief-admin-office",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-corporateGroups-chiefAdminOffice",
      "extHref" : null
    }, {
      "title" : "Finance",
      "href" : "https://vzweb2.verizon.com/finance",
      "newWindow" : false,
      "classes" : "vz-gui-icon-finance",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-corporateGroups-finance",
      "extHref" : null
    }, {
      "title" : "Fleet Operations",
      "href" : "https://vzweb2.verizon.com/fleet-operations",
      "newWindow" : false,
      "classes" : "vz-gui-icon-fleet-operations",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-corporateGroups-fleetOperations",
      "extHref" : null
    }, {
      "title" : "Global Real Estate",
      "href" : "https://vzweb2.verizon.com/node/11269",
      "newWindow" : false,
      "classes" : "vz-gui-icon-global-real-estate",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-corporateGroups-globalRealEstate",
      "extHref" : null
    }, {
      "title" : "Human Resources",
      "href" : "https://vzweb.verizon.com/intranet/wireline/AboutYou/HRGuidelines",
      "newWindow" : false,
      "classes" : "vz-gui-icon-human-resources",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-corporateGroups-humanResources",
      "extHref" : null
    }, {
      "title" : "Operational Excellence",
      "href" : "https://vzweb2.verizon.com/node/13741",
      "newWindow" : false,
      "classes" : "vz-gui-icon-operational-excellence",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-corporateGroups-operational-excellence",
      "extHref" : null
    }, {
      "title" : "Product and New Business",
      "href" : "https://vzweb2.verizon.com/product-organization",
      "newWindow" : false,
      "classes" : "vz-gui-icon-product-new-business",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-corporateGroups-productNewBusiness",
      "extHref" : null
    }, {
      "title" : "Public Policy, Law and Security",
      "href" : "https://vzweb2.verizon.com/public-policy-law-and-security-0",
      "newWindow" : false,
      "classes" : "vz-gui-icon-policy-law-security",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-corporateGroups-policyLawSecurity",
      "extHref" : null
    }, {
      "title" : "Supply Chain Services",
      "href" : "https://vzweb2.verizon.com/supply-chain-services-blocks",
      "newWindow" : false,
      "classes" : "vz-gui-icon-supply-chain-services",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-corporateGroups-supplyChainServices",
      "extHref" : null
    }, {
      "title" : "Strategy, Development and Planning",
      "href" : "https://vzweb2.verizon.com/strategy-development-and-planning-0",
      "newWindow" : false,
      "classes" : "vz-gui-icon-strategy-development-planning",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-corporateGroups-strategyDevelopmentPlanning",
      "extHref" : null
    }, {
      "title" : "Technology",
      "href" : "https://vzweb2.verizon.com/content/information-technology",
      "newWindow" : false,
      "classes" : "vz-gui-icon-technology",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-corporateGroups-technology",
      "extHref" : null
    }, {
      "title" : "VDS India",
      "href" : "https://vzweb2.verizon.com/vds-india",
      "newWindow" : false,
      "classes" : "vz-gui-icon-vds-india",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-corporateGroups-vdsIndia",
      "extHref" : null
    }, {
      "title" : "Wireline Network Operations",
      "href" : "https://vzweb2.verizon.com/content/network-and-technology",
      "newWindow" : false,
      "classes" : "vz-gui-icon-wireline-network-operations",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-corporateGroups-wirelineNetworkOperations",
      "extHref" : null
    } ],
    "lib" : "menu-vzweb-whoWeAre-corporateGroups",
    "extHref" : null
  }, {
    "title" : "Enterprise Solutions",
    "href" : "https://vzweb2.verizon.com/content/enterprise-solutions",
    "newWindow" : false,
    "classes" : null,
    "active" : false,
    "submenu" : [ {
      "title" : "Partner Solutions",
      "href" : "https://vzweb2.verizon.com/content/global-wholesale",
      "newWindow" : false,
      "classes" : "vz-gui-icon-partner-solutions",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-vzweb-whoWeAre-enterpriseSolutions-partnerSolutions",
      "extHref" : null
    } ],
    "lib" : "menu-vzweb-whoWeAre-enterpriseSolutions",
    "extHref" : null
  }, {
    "title" : "Consumer and Mass Business",
    "href" : "https://vzweb2.verizon.com/content/consumer-and-mass-business",
    "newWindow" : false,
    "classes" : null,
    "active" : false,
    "submenu" : null,
    "lib" : "menu-vzweb-whoWeAre-consumerMassBusiness",
    "extHref" : null
  }, {
    "title" : "Wireless",
    "href" : "https://vzweb2.verizon.com/content/wireless",
    "newWindow" : false,
    "classes" : null,
    "active" : false,
    "submenu" : null,
    "lib" : "menu-vzweb-whoWeAre-wireless",
    "extHref" : null
  } ],
  "lib" : "menu-vzweb",
  "extHref" : ""
}, {
  "title" : "About You",
  "href" : "https://aboutyou.verizon.com",
  "newWindow" : false,
  "classes" : null,
  "active" : false,
  "submenu" : [ {
    "title" : "About You Home",
    "href" : "https://aboutyou.verizon.com",
    "newWindow" : false,
    "classes" : "vz-gui-visible-xs",
    "active" : false,
    "submenu" : null,
    "lib" : null,
    "extHref" : null
  }, {
    "title" : "For Me",
    "href" : "https://aboutyou.verizon.com/YourInfo",
    "newWindow" : false,
    "classes" : "",
    "active" : false,
    "submenu" : [ {
      "title" : "Your Total Rewards",
      "href" : "https://aboutyou.verizon.com/HRGuidelines/Money/YourTotalRewards",
      "newWindow" : false,
      "classes" : "vz-gui-icon-your-total-rewards",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-forMe-yourTotalRewards",
      "extHref" : ""
    }, {
      "title" : "View Paycheck",
      "href" : "https://psvz-uatsso.ehr.verizon.com/payroll/#/paycheck/summary/current",
      "newWindow" : false,
      "classes" : "vz-gui-icon-view-paycheck",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-forMe-viewPaycheck",
      "extHref" : ""
    }, {
      "title" : "HR Business Partners",
      "href" : "https://ps-prdsso.ehr.verizon.com/psc/vzehpra/EMPLOYEE/HRMS/c/B_ESS_MENU.B_HR_PRFLABOUT_CMP.GBL",
      "newWindow" : false,
      "classes" : "vz-gui-icon-hr-contacts",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-forMe-hrContacts",
      "extHref" : null
    }, {
      "title" : "Recognizing You!",
      "href" : "https://federation.verizon.com/affwebservices/public/saml2sso?SPID=incentone",
      "newWindow" : false,
      "classes" : "vz-gui-icon-recognizing-you",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-forMyTeam-recognizingYou",
      "extHref" : null
    }, {
      "title" : "Our Credo",
      "href" : "https://aboutyou.verizon.com/HRGuidelines/VzCulture/OurCredo",
      "newWindow" : false,
      "classes" : "vz-gui-icon-our-credo",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-forMe-ourCredo",
      "extHref" : null
    }, {
      "title" : "Employee Discounts",
      "href" : "https://aboutyou.verizon.com/HRGuidelines/LifeAndTimeOff/EmployeeDiscounts-0",
      "newWindow" : false,
      "classes" : "vz-gui-icon-employee-discounts",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-forMe-employeeDiscounts",
      "extHref" : null
    }, {
      "title" : "Direct Deposit",
      "href" : "https://ps-prdsso.ehr.verizon.com/psp/vzehpra/EMPLOYEE/HRMS/c/B_VZC_PAYROLL_MENU.PY_IC_DIR_DEP.GBL?Action=C",
      "newWindow" : false,
      "classes" : "vz-gui-icon-direct-deposit",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-forMe-directDeposit",
      "extHref" : null
    }, {
      "title" : "Access W2",
      "href" : "https://ps-prdsso.ehr.verizon.com/psp/vzehpra/EMPLOYEE/HRMS/c/B_VZC_PAYROLL_MENU.B_PY_ESS_W2.GBL",
      "newWindow" : false,
      "classes" : "vz-gui-icon-access-w2",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-forMe-accessW2",
      "extHref" : null
    }, {
      "title" : "Manage Your 401K",
      "href" : "https://federation.verizon.com/affwebservices/public/saml2sso?SPID=urn:sp:fidelity:geninbndnbparts20",
      "newWindow" : false,
      "classes" : "vz-gui-icon-manage-your-401k",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-forMe-401k",
      "extHref" : null
    }, {
      "title" : "Access Performance Documents",
      "href" : "https://ps-prdsso.ehr.verizon.com/psc/vzehpra/EMPLOYEE/HRMS/c/ROLE_MANAGER.B_EPERF_LANDING.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_MANAGER_SELF_SERVICE.HC_MGR_PERFORMANCE_MGMT.B_EPERF_LANDING_GBL",
      "newWindow" : false,
      "classes" : "vz-gui-icon-access-performance-docs",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-forMe-accessPerformanceDocuments",
      "extHref" : null
    }, {
      "title" : "Benefits Connection",
      "href" : "https://federation.verizon.com/affwebservices/public/saml2sso?SPID=verizonwl-acs-sp",
      "newWindow" : false,
      "classes" : "vz-gui-icon-benefits-connection",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-forMe-benefitsConnection",
      "extHref" : null
    }, {
      "title" : "Employee Assistance Program",
      "href" : "https://aboutyou.verizon.com/HRGuidelines/LifeAndTimeOff/EmployeeAssistanceProgram",
      "newWindow" : false,
      "classes" : "vz-gui-icon-employee-assistance-program",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-forMe-employeeAssistanceProgram",
      "extHref" : null
    }, {
      "title" : "Anthem Medical",
      "href" : "https://federationsac.verizon.com/affwebservices/public/saml2sso?SPID=saml.anthem.com:Verizon&RelayState=https://saml.anthem.com/SSOPropagator/Verizon-abcbs.jsp",
      "newWindow" : false,
      "classes" : "vz-gui-icon-anthem-medical",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-forMe-anthemMedical",
      "extHref" : null
    }, {
      "title" : "Base Pay",
      "href" : "https://aboutyou.verizon.com/HRGuidelines/Money/BasePay",
      "newWindow" : false,
      "classes" : "vz-gui-icon-base-pay",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-forMe-basePay",
      "extHref" : null
    }, {
      "title" : "WellConnect",
      "href" : "https://federation.verizon.com/affwebservices/public/saml2sso?SPID=verizonwl-acs-sp&RelayState=https://www.verizonbenefitsconnection.com/verizon/wireline/ssowc",
      "newWindow" : false,
      "classes" : "vz-gui-icon-well-connect",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-forMe-wellConnect",
      "extHref" : null
    }, {
      "title" : "IT Time Reporting",
      "href" : "http://pace.verizon.com",
      "newWindow" : false,
      "classes" : "vz-gui-icon-time-reporting",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-workTools-popularTools-vdsiTimeReporting",
      "extHref" : null
    } ],
    "lib" : "menu-aboutYou-forMe",
    "extHref" : ""
  }, {
    "title" : "HR Guidelines & procedures",
    "href" : "https://aboutyou.verizon.com/HRGuidelines",
    "newWindow" : false,
    "classes" : "",
    "active" : false,
    "submenu" : [ {
      "title" : "Health & Benefits",
      "href" : "https://aboutyou.verizon.com/HRGuidelines/HealthAndBenefits",
      "newWindow" : false,
      "classes" : "vz-gui-icon-health-benefits",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-hrGuidelinesProcedures-healthBenefits",
      "extHref" : ""
    }, {
      "title" : "Career & Learning",
      "href" : "https://aboutyou.verizon.com/HRGuidelines/TrainingAndCareer",
      "newWindow" : false,
      "classes" : "vz-gui-icon-career-learning",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-hrGuidelinesProcedures-careerlearning",
      "extHref" : ""
    }, {
      "title" : "Money",
      "href" : "https://aboutyou.verizon.com/HRGuidelines/Money",
      "newWindow" : false,
      "classes" : "vz-gui-icon-money",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-hrGuidelinesProcedures-money",
      "extHref" : null
    }, {
      "title" : "Life & Time Off",
      "href" : "https://aboutyou.verizon.com/HRGuidelines/LifeAndTimeOff",
      "newWindow" : false,
      "classes" : "vz-gui-icon-life-timeoff",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-hrGuidelinesProcedures-lifeTimeoff",
      "extHref" : null
    }, {
      "title" : "Labor Relations",
      "href" : "https://aboutyou.verizon.com/HRGuidelines/LaborRelations",
      "newWindow" : false,
      "classes" : "vz-gui-icon-labor-relations",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-hrGuidelinesProcedures-laborRelations",
      "extHref" : null
    }, {
      "title" : "Environmental Health & Safety",
      "href" : "https://aboutyou.verizon.com/HRGuidelines/EnvironmentalHealthAndSafety",
      "newWindow" : false,
      "classes" : "vz-gui-icon-env-health-safety",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-hrGuidelinesProcedures-environmentalHealthSafety",
      "extHref" : null
    }, {
      "title" : "VZ Culture",
      "href" : "https://aboutyou.verizon.com/HRGuidelines/VzCulture",
      "newWindow" : false,
      "classes" : "vz-gui-icon-vz-culture",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-hrGuidelinesProcedures-vzculture",
      "extHref" : null
    }, {
      "title" : "Union Awareness",
      "href" : "https://aboutyou.verizon.com/HRGuidelines/LaborRelations",
      "newWindow" : false,
      "classes" : "vz-gui-icon-labor-relations",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-aboutYou-hrGuidelinesProcedures-laborRelations",
      "extHref" : null
    } ],
    "lib" : "menu-aboutYou-hrGuidelinesProcedures",
    "extHref" : ""
  }, {
    "title" : "News",
    "href" : "https://vzweb2.verizon.com/content/about-you",
    "newWindow" : false,
    "classes" : "",
    "active" : false,
    "submenu" : null,
    "lib" : "menu-aboutYou-news",
    "extHref" : null
  } ],
  "lib" : "menu-aboutYou",
  "extHref" : ""
}, {
  "title" : "Work Tools",
  "href" : "https://vzweb2.verizon.com/work-tools",
  "newWindow" : false,
  "classes" : null,
  "active" : false,
  "submenu" : [ {
    "title" : "Popular Tools",
    "href" : "https://vzweb2.verizon.com/work-tools",
    "newWindow" : false,
    "classes" : "",
    "active" : false,
    "submenu" : [ {
      "title" : "Conference Booking",
      "href" : "https://bookaspace.verizon.com/",
      "newWindow" : false,
      "classes" : "vz-gui-icon-conference-booking",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-workTools-popularTools-conferenceBooking",
      "extHref" : null
    }, {
      "title" : "HelpDesk",
      "href" : "http://helpdesk.verizon.com/",
      "newWindow" : false,
      "classes" : "vz-gui-icon-helpdesk",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-workTools-popularTools-helpdesk",
      "extHref" : null
    }, {
      "title" : "Learning Portal (VZLearn)",
      "href" : "https://learn.lms.verizon.com/",
      "newWindow" : false,
      "classes" : "vz-gui-icon-learing-portal",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-workTools-popularTools-learingPortal",
      "extHref" : null
    }, {
      "title" : "Powerful Answers",
      "href" : "https://vzweb2.verizon.com/powerful-answers",
      "newWindow" : false,
      "classes" : "vz-gui-icon-powerful-answers",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-workTools-popularTools-powerfulAnswers",
      "extHref" : null
    }, {
      "title" : "Real Estate - WOW",
      "href" : "https://vzweb2.verizon.com/real-estate-facilities-wow",
      "newWindow" : false,
      "classes" : "vz-gui-icon-real-estate",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-workTools-popularTools-realEstate",
      "extHref" : null
    }, {
      "title" : "Verizon ERP Portal (formerly SAP Portal/SC SRM)",
      "href" : "https://sapportal.verizon.com/",
      "newWindow" : false,
      "classes" : "vz-gui-icon-erp-portal",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-workTools-popularTools-erpPortal",
      "extHref" : null
    }, {
      "title" : "VZRequest",
      "href" : "https://vzrequest.vzwcorp.com/",
      "newWindow" : false,
      "classes" : "vz-gui-icon-vzrequest",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-workTools-popularTools-vzrequest",
      "extHref" : null
    }, {
      "title" : "Accounts Payable",
      "href" : "https://vzweb2.verizon.com/accounts-payable",
      "newWindow" : false,
      "classes" : "vz-gui-icon-accounts-payable",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-workTools-popularTools-accountsPayable",
      "extHref" : null
    }, {
      "title" : "Travel Arrangements",
      "href" : "https://vzweb2.verizon.com/travel-arrangements",
      "newWindow" : false,
      "classes" : "vz-gui-icon-travel-arrangements",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-workTools-popularTools-travelArrangements",
      "extHref" : null
    }, {
      "title" : "Intranet Links A-Z",
      "href" : "https://vzweb2.verizon.com/intranet-a-z",
      "newWindow" : false,
      "classes" : "vz-gui-icon-intranet-links",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-workTools-popularTools-intranetLinks",
      "extHref" : null
    }, {
      "title" : "Report an IT Security Incident",
      "href" : "https://itsecurity.verizon.com/cirt/incident.aspx",
      "newWindow" : false,
      "classes" : "vz-gui-icon-report-security-incident",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-workTools-popularTools-securityIncident",
      "extHref" : null
    }, {
      "title" : "Report an Urgent Service Issue",
      "href" : "https://vzweb2.verizon.com/report-urgent-service-issue",
      "newWindow" : false,
      "classes" : "vz-gui-icon-report-service-issue",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-workTools-popularTools-serviceIssue",
      "extHref" : null
    }, {
      "title" : "VZDelivery",
      "href" : "http://vzdelivery.verizon.com/",
      "newWindow" : false,
      "classes" : "vz-gui-icon-vzdelivery",
      "active" : false,
      "submenu" : null,
      "lib" : "menu-workTools-popularTools-vzdelivery",
      "extHref" : null
    } ],
    "lib" : "menu-workTools-popularTools",
    "extHref" : null
  }, {
    "title" : "CrowdAround",
    "href" : "https://crowdaround.verizon.com/",
    "newWindow" : false,
    "classes" : "",
    "active" : false,
    "submenu" : null,
    "lib" : "menu-workTools-crowdAround",
    "extHref" : null
  }, {
    "title" : "VZKnowledge",
    "href" : "https://knowledge.verizon.com/",
    "newWindow" : false,
    "classes" : "",
    "active" : false,
    "submenu" : null,
    "lib" : "menu-workTools-vzknowledge",
    "extHref" : null
  } ],
  "lib" : "menu-workTools",
  "extHref" : ""
} ] ;
}



/***********************************************
 Extranet Service starts
 ***********************************************/

var Extranet = {

    iveUatHostname: 'extranet98.verizon.com',

    iveProdHostname: 'extranet.verizon.com',

    isExtranet: function() {
        return (typeof DanaLoc !== 'undefined');
    },

    rewriteUrl: function(url) {
        if (url && this.isExtranet()) {
            url = DanaUrl(url);
        }
        return url;
    }
};

var VZGLOBALUIGLOBALVARS = {
  division : '$DIVISION'
}

/***********************************************
 Extranet Service ends
 ***********************************************/

 /***********************************************
 Search Auto Suggest starts
 ***********************************************/
 var AutoComplete = null;

/**
 * @desc Function to check blank spaces
 * @param String
 * @return bool - success or failure
 */

function checkBlankChars(datafield) {

  if ( datafield === "Search Intranet & People" || datafield.trim().length === 0) {
    alert('Enter a keyword to search for');
    return false;
  }
  return true;
}
/**
 * @desc Function to submit AY Search Bar form
 * @param none
 * @return none
 */

function searchIntranet(keyword) {
  var str_array = keyword.split('~~');
  keyword = str_array[0];
  submitSearchHeaderKeyword(keyword);

}

function getVZSearchURL() {
  var VZ_SEARCH_URL = '';
  if (window.location.href.indexOf('ebiz') > -1) {
    VZ_SEARCH_URL = 'https://vzsearch.ebiz.verizon.com/search/?search_content=';
  } else {
    VZ_SEARCH_URL = 'https://vzsearch.verizon.com/search/?search_content=';
  }

  return VZ_SEARCH_URL;
}



function submitSearchHeaderKeyword(keyword) {

  var searchText = keyword;

  if (checkBlankChars(searchText) && checkSpecialChars(searchText)) {
    searchText = encodeURIComponent(searchText);
    window.location.href = Extranet
        .rewriteUrl(getVZSearchURL()
        + searchText + '&source='
        + 'All');


  }
}



function submitSearchHeader() {

  var searchText =  document.getElementById('vz-gui-edit-search-content-input').value;

  if (checkBlankChars(searchText) && checkSpecialChars(searchText)) {
    searchText = encodeURIComponent(searchText);

    window.location.href = Extranet
        .rewriteUrl(getVZSearchURL()
        +searchText + '&source='
        + 'All');


  }
}




/**
 * @desc Function to check special characters
 * @param String
 * @return bool - success or failure
 */
function checkSpecialChars(datafield) {

  if (/[^a-zA-Z0-9\s\.\$\(\)\-\?\&\*\:\;\,\'\"\/\\]/.test(datafield)) {
    alert("Your input has special characters. \n Please remove them and try again.");
    return false;
  }
  return true;
}

function autoCompleletTrackPeople(title, url) {

  window.open(Extranet.rewriteUrl(url), "_self");



}

function autoCompleletTrack(title, url) {

  document.getElementById('vz-gui-search-results').style.display = 'none';
  searchIntranet(title);

}

function autoCompleletTrackSuggested(title, url) {

  document.getElementById('vz-gui-search-results').style.display = 'none';
  window.open(url, "_self");
  return false;

}

function autoCompleletTrackTransactions(title, url) {

  window.open(url, "_self").focus();
  document.getElementById('vz-gui-search-results').style.display = 'none';
  return false;

}

function GotoAllPeople(title) {

  var searchType = title.split('~~');
  url = Extranet.rewriteUrl(getVZSearchURL()
      + encodeURIComponent(searchType[0]) + '&source=People');

  window.open(url, "_self");
  document.getElementById('vz-gui-search-results').style.display = 'none';
  return false;

}

function GotoAllSearchResults(title) {


  var searchType = title.split('~~');
  var url = '';




  if (searchType[1] == 'vz-gui-edit-search-content-input') {



    url = Extranet.rewriteUrl(getVZSearchURL()
        + '"' + encodeURIComponent(searchType[0]) + '"' + '&source='+'All');
    window.open(url, "_self");
    document.getElementById('vz-gui-search-results').style.display = 'none';
    document.getElementById('vz-gui-search-span-arrow').style.display = 'none';
    document.getElementById('vz-gui-search-clear').style.display = 'none';

  }


  return false;

}

function strip(html) {
  var tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText;
}



//(function() {

/**
 * This file contains JavaScript functions used for both wireline and
 * wireless. The file only contains functions used for entire portal.
 *
 */

/***************************************************************************
 * AY Search AutoSuggestion functions
 **************************************************************************/

/*
 * ---------------------------------------------------------------------------------------------------------
 * base code lifted from globalalert.js and formatted for reusability
 * ---------------------------------------------------------------------------------------------------------
 */

var CookieHandler = {
  put : function(name, value, days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      var expires = "; expires=" + date.toGMTString();
    } else
      var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
  },

  get : function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for ( var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ')
        c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0)
        return c.substring(nameEQ.length, c.length);
    }
    return null;
  },

  del : function(name) {
    this.put(name, "", -1);
  }
};

String.prototype.capitalize = function() {
  return this.replace(/(^|\s)([a-z])/g, function(m, p1, p2) {
    return p1 + p2.toUpperCase();
  });
};

function toTitleCase(str) {
  return str.replace(/(\b\w)([a-zA-Z0-9]+)/gi, function(t, a, b) {
    return a.toUpperCase() + b.toLowerCase();
  });

  // return str.replace(/\w\S*/g, function(txt){return
  // txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function filterTypeAhead(user_input) {

  if (user_input != null && user_input != undefined && (user_input).length >= 2) return true;

  else return false;

}

/*
 * ---------------------------------------------------------------------------------------------------------
 * AutoComplete - Generic function for auto-suggestion
 * ---------------------------------------------------------------------------------------------------------
 */

//(function() {
//var _tag = _tag || new WebTrends();
var time = null;

AutoComplete = function(input, url, clas) {

  this.input = input.tagName ? input : document.getElementById(input);
  this.url = url;
  this.sPhrases = new Array();
  this.sURLs = new Array();
  this.index = 0;
  this.sDiv = null;
  this.sInnerDiv = null;
  this.autoSearchScriptTag = null;
  this.srDivs = new Array();
  this.keyDown = function(e) {
    var self = arguments.callee.self;
    var pi = pix = self.index;
    e = e || window.event;
    var x = 1;
    switch (e.keyCode) {
      case 13:
        // searchIntranet(self.input.value);
        self.fireSearch();
        break;
      case 27:
        self.close();
        break;
      case 38:
        x = -1;
      case 40:
        if (self.srDivs.length < 1)
          return;
        do {
          pi = pix + x;
          if (e.keyCode == 38) {
            pix = pi < 0 ? self.srDivs.length - 1 : pi
          } else {
            pix = pi >= self.srDivs.length ? 0 : pi
          }
          if (!pix) {
            break;
          }
        } while (self.srDivs[pix].parentNode.style.display == 'none');
        //To remove extra active on Keyup and Keydown
        for (i = 0; i < self.srDivs.length; i++) {
          self.srDivs[i].className = 'vz-gui-result';
        }
        self.updateSelection(pix);
        break;
    }
    ;
  };
  this.keyDown.self = this;
  this.keyUp = function(e) {
    var self = arguments.callee.self;
    // this.className+=' vz-gui-active';
    e = e || window.event;
    if (e.keyCode in {
          13 : '',
          27 : '',
          37 : '',
          38 : '',
          39 : '',
          40 : ''
        })
      return;
    self.clear();
    // commented by sathiya on 05-26-2014 to remove time delay
    /*
     * if(time != null) { window.clearInterval(time); }
     */
    // time=self.setInterval(function(){
    /*
     * time=window.setInterval(function(){
     * self.sPhrases[0]=self.input.value; self.updateList(); },500);
     */

    self.sPhrases[0] = self.input.value;
    // alert(self.input.value);
    self.updateList();
  };
  this.keyUp.self = this;
  this.chosen = function(e) {
    var self = arguments.callee.self;
    // this.className+=' vz-gui-active';
    e = e || window.event;
    var tar = e.srcElement || e.target;
    if (tar.tagName == 'A') {
      return;
    }
    self.fireSearch();
  };
  this.chosen.self = this;
  this.fireSearch = function() {
    // alert(this.index);
    if (this.index) {
      var x = this.sURLs[this.index];
      if (x.length > 0) {
        window.location = x;
      } else {
        // Comment out by dawei, for search war, so page will
        // not refresh, simply update iframe
        // this.input.form.submit();
        searchIntranet(this.sPhrases[this.index] + '~~'
            + this.input.id);
      }
    } else {
      // Comment out by dawei, for search war, so page will not
      // refresh, simply update iframe
      // this.input.form.submit();
      // alert("before");
      if((typeof (this.sPhrases[this.index]) != 'undefined')){
        searchIntranet(this.sPhrases[this.index] + '~~'
            + this.input.id);
      }else{
        alert("Enter a keyword to search for");
      }
      // alert("after");
    }
  };
  this.search = function() {
  };
  this.updateSelection = function(pi) {
    this.open();
    this.index = pi;
    this.input.value = this.sPhrases[pi];

    //this.highlight();
    //this.nohighlight();
    if (this.index) {
      //added by JSUN to remove extra active
      if ((this.srDivs[this.index].className).indexOf('vz-gui-active') == -1)
        this.srDivs[this.index].className += ' vz-gui-active';
    }
  };
  this.highlight = function() {
    var self = arguments.callee.self;
    //self.index=self.nohighlight(this);
    //self.input.value=self.sPhrases[self.index];
    //added by JSUN to remove extra active
    if ((this.className).indexOf('vz-gui-active') == -1)
      this.className += ' vz-gui-active';
  };
  this.highlight.self = this;

  this.nohighlight = function(find) {
    var ret = null;
    for (i in this.srDivs) {
      i = parseInt(i);
      if (i) {
        this.srDivs[i].className = this.srDivs[i].className.replace(' vz-gui-active', '')
      }
      if (this.srDivs[i] == find) {
        ret = i
      }
    }
    return ret;
  };
  this.divMouseOut = function(e) {
    var self = arguments.callee.self;
    e = e || window.event;
    var tar = e.srcElement || e.target;
    var rel = e.relatedTarget || e.toElement;
    //if (rel != null || rel != 'undefined') {
    if (rel != null || typeof rel != 'undefined') {
      while (rel != this && rel.nodeName != 'BODY' && rel.tagName != 'HTML') {
        rel = rel.parentNode;
      }
    }
    if (rel == this)
      return;
    self.nohighlight();
  };
  this.divMouseOut.self = this;
  this.open = function() {
    this.sDiv.style.display = 'block';
  };
  this.close = function() {
    var self = arguments.callee.self;
    self.timer = setTimeout(function() {
      self.closereal()
    }, 150);
  };
  this.close.self = this;
  this.closereal = function() {
    this.sDiv.style.display = 'none';
    this.index = 0;
  };
  this.clear = function() {
    var self = arguments.callee.self;
    clearTimeout(self.timer);
    self.timer = null;
    self.input.focus();
  };
  this.clear.self = this;
  this.on = function() {
    var self = arguments.callee.self;
    CookieHandler.del('autoComplete');
    self.sInnerDiv.style.display = 'block';
  };
  this.on.self = this;
  this.off = function() {
    var self = arguments.callee.self;
    CookieHandler.put('autoComplete', '1', 365);
    self.sInnerDiv.style.display = 'none';
  };
  this.off.self = this;
  this.toggleSection = function() {
    var self = arguments.callee.self;
    var x = this.nextSibling;
    while (x.nodeType != 1 || x.tagName != 'DIV') {
      x = x.nextSibling;
    }
    x.style.display = x.style.display == 'none' ? 'block' : 'none';
    this.className = this.className == 'vz-gui-open' ? '' : 'vz-gui-open';
    var ch = CookieHandler;
    var cookie = 'autoComplete_' + this.getAttribute('type');
    ch.get(cookie) ? ch.del(cookie) : ch.put(cookie, 1, 365)
  };
  this.toggleSection.self = this;
  var callCounter = 0;
  var temp = '';
  this.updateList = function() {
    var self = arguments.callee.self;
    if (this.input.value.length >= 1) {


      if (this.input.id == 'vz-gui-edit-search-content-input') {
        /*document.getElementById('vz-gui-search-overlay-top').style.display = 'block';
         document.getElementById('vz-gui-search-results').style.display = 'block';
         document.getElementById('vz-gui-search-span-arrow').style.display = 'block';*/
        document.getElementById('vz-gui-search-clear').style.display = 'block';
      }


      var sc = '';

      if (this.input.id == 'vz-gui-edit-search-content-input') {

        sc = Extranet.rewriteUrl(this.url
            + '&source='
            + 'All' + '&str='
            + encodeURIComponent(this.input.value));


      }

      if (filterTypeAhead(this.input.value)) {

        //Prevent duplicate requests due to multiple trigger of keyup for same keyword
        if(temp!=this.input.value){
          var url = sc + "&callCounter="+ (++callCounter) +"&callback=";

          if(this.autoSearchScriptTag !== null){
            document.getElementsByTagName('head')[0].removeChild(this.autoSearchScriptTag);

            var script1 = document.createElement('script');
            script1.src = url + 'IntranetAutoSuggest.parseList';
            script1.id = 'autoSuggestScriptId';
            document.getElementsByTagName('head')[0].appendChild(script1);
            this.autoSearchScriptTag = script1;
          }else{
            var script = document.createElement('script');
            script.src = url + 'IntranetAutoSuggest.parseList';
            script.id = 'autoSuggestScriptId';
            document.getElementsByTagName('head')[0].appendChild(script);
            this.autoSearchScriptTag = script;
          }

        }
        temp = this.input.value;

        this.open();
      }

    } else {
      this.close();
      this.sPhrases = [];
      this.srDivs = [];
      this.sInnerDiv.innerHTML = "";
      document.getElementById('vz-gui-search-results').style.display = 'none';
      document.getElementById('vz-gui-search-overlay-top').style.display = 'none';
      document.getElementById('vz-gui-search-span-arrow').style.display = 'none';
      document.getElementById('vz-gui-search-clear').style.display = 'none';
    }

    if (time != null) {
      window.clearInterval(time);
    }
    time = null;
  };

  this.updateList.self = this;

  this.parseList = function(json) {
    if(json['COUNTER'] == callCounter) {

      var text = '';
      var cnt = 1;
      var peoplecnt = 1;
      var searchcnt = 1;
      var suggestedcnt = 1;
      var takeActcnt = 1;
      var url = lbl = lblx = type = title = '';
      var validLoop = false;
      for ( var i in json) {
        //var types = [ 'Suggested', 'Search', 'People' ];
        var types = ['Take Action', 'Suggested', 'People', 'Search' ];
        for ( var k = 0; k < types.length; k++) {
          for ( var j in json[i]) {
            var types_val = types[k];
            if (types_val == 'Take Action') {
              var types_val = 'Suggested';
            }
            if (!json[i][j]['TYPE'] && types[k] != 'Search') {
              continue;
            } else if (!json[i][j]['TYPE']
                || json[i][j]['TYPE'].match(new RegExp(types_val, 'i'))) {
              if (j == "first" || j == "last") {
                continue;
              }
              if (type != types[k]) {
                if (type != '') {
                  text += '</div>';
                }
                var ck = CookieHandler.get('autoComplete_'
                    + types[k]);
                var type;
                if (types[k] == 'Search') {
                  type = 'Additional Search Keywords';
                } else if (types[k] == 'People') {
                  type = 'People';
                } else if (types[k] == 'Suggested') {
                  type = 'Featured/Info/Guidelines';
                } else if (types[k] == 'Take Action') {
                  type = 'Take Action';
                }
                //if ((type == 'Content') || (type=='Suggested') || ((type == 'People') && (!Extranet.isExtranet()))) {
                if ((type == 'Additional Search Keywords') || (type=='Featured/Info/Guidelines') || (type == 'People')  || (type=='Take Action')) {
                  title = '<span type="' + types[k]
                      + '" class="' + 'vz-gui-search-section-heading'
                      + '">' + type
                      + '</span>';
                }
                type = types[k];

              }
              url = json[i][j]['URL'];
              lbl = json[i][j]['LABEL'];
              if (lbl != null) {

                lblx = lbl.replace(new RegExp("("
                        + this.input.value + ")", "i"),
                    '<strong>$1</strong>');

              }


              edirurl = json[i][j]['EDIRURL'];
              avatarurl = json[i][j]['IMAGEURL'];


              if(edirurl != "" && edirurl != null){
                edirurl = Extranet
                    .rewriteUrl(edirurl);
              }

              if(avatarurl != "" && avatarurl != null){
                avatarurl = Extranet
                    .rewriteUrl(avatarurl);
              }



              email = json[i][j]['EMAIL'];
              //state = json[i][j]['STATE'];
              //city = json[i][j]['CITY'];
              phone = json[i][j]['PHONE'];
              job = json[i][j]['JOBTITLE'];
              lob=json[i][j]['LOB'];


              if (types[k] == 'People') {
                if (peoplecnt <= 5) {
                  if (peoplecnt == 1) {
                    text += title;
                  }
                  peoplecnt = peoplecnt + 1;
                  validLoop = true;
                  // alert(peoplecnt);
                  var imgurl = '';
                  var showUrl = url ? url : "";
                  if (showUrl != "" && showUrl != null) {
                    showUrl = Extranet
                        .rewriteUrl(showUrl);
                  }
                  var rlblx = lblx.replace(/'/g, "\\\'");
                  rlblx += '~~' + this.input.id;

                  text += '<div sr="1" class="vz-gui-result vz-gui-result-people' + (url ? ' vz-gui-search-url' : '') + '" onclick="autoCompleletTrackPeople(\''
                      + strip(rlblx) + '\',\''
                      + edirurl + '\');" >';

                  text += '<div class="vz-gui-avatar" ><img src="'
                      + avatarurl + '" /></div>';   // avatar image
                  text += '<div class="vz-gui-people-info">';
                  text+= '<div class="vz-gui-title vz-gui-title-name"><h4>'+ lblx.replace(',', ' ') + '</h4></div>';
                  text+= job?'<div class="vz-gui-title vz-gui-title-job">'+job+'</div>':'';
                  text+= lob?'<div class="vz-gui-title vz-gui-title-lob">'+lob+'</div>':'';
                  text+= phone?'<div class="vz-gui-title vz-gui-title-phone">'+phone+'</div>':'';
                  text+= email?'<div class="vz-gui-title vz-gui-title-email"><a href="mailto:'+email+'">'+email+'</a></div>':'';

                  text+= '</div>';
                  text+= '<div class="vz-gui-clearfix"></div>';

                  text+= '</div>';
                }
                else if (peoplecnt == 6) {
                  this.input = input.tagName ? input : document
                      .getElementById(input);
                  // alert(input);
                  var sn = document.getElementById(input).value;
                  // alert(sn);
                  /*
                   * if(sn == '' || 'Search Intranet & People') { sn =
                   * document.getElementById('edit-search-content').value; }
                   */
                  // alert(sn);
                  text += '<div class="vz-gui-view-all"><a onclick="GotoAllPeople(\''
                      + sn
                      + '\');">See all people results</a></div>';
                  peoplecnt = peoplecnt + 1;

                }

              } else if ((types[k] == 'Suggested') && (json[i][j]['TRANSACTION'] != 'Yes')) {
                // text+='<a href="'+url+'">'+lblx+'</a>';
                // alert(url);
                if (suggestedcnt <= 5) {
                  if (suggestedcnt == 1) {
                    text += title;
                  }
                  suggestedcnt = suggestedcnt + 1;
                  validLoop = true;
                  text += '<div sr="1" class="vz-gui-result '
                      + (url ? ' vz-gui-search-url' : '') + '">';

                  var showUrl = url ? url : "";
                  if (showUrl != "" && showUrl != null) {
                    showUrl = Extranet
                        .rewriteUrl(showUrl);
                  }
                  var rlblx = lblx.replace(/'/g, "\\\'");
                  rlblx += '~~' + this.input.id;
                  text += '<div><a onclick="autoCompleletTrackSuggested(\''
                      + strip(rlblx)
                      + '\',\''
                      + showUrl
                      + '\');" href="#">'
                      + lblx + '</a></div>';
                  /*
                   * if(url){ text+='<br /><span>'+url+'</span>' }
                   */
                  text += '</div>';
                }
              } else if ((types[k] == 'Take Action') && ((json[i][j]['TYPE'] == 'Suggested') && (json[i][j]['TRANSACTION'] == 'Yes'))) {
                if (takeActcnt <= 5) {
                  if (takeActcnt == 1) {
                    text += title;
                  }
                  takeActcnt = takeActcnt + 1;
                  text += '<div sr="1" class="vz-gui-result '
                      + (url ? ' vz-gui-search-url' : '') + '">';
                  validLoop = true;
                  var showUrl = url ? url : "";
                  if (showUrl != "" && showUrl != null) {
                    showUrl =
                        Extranet.rewriteUrl(showUrl);
                  }
                  var rlblx = lblx.replace(/'/g, "\\\'");
                  rlblx += '~~' + this.input.id;
                  text += '<div><a onclick="autoCompleletTrackTransactions(\''
                      + strip(rlblx)
                      + '\',\''
                      + showUrl
                      + '\');" href="#">'
                      + lblx + '</a></div>';
                  /*
                   * if(url){ text+='<br /><span>'+url+'</span>' }
                   */
                  text += '</div>';
                }
              } else if (types[k] == 'Search') {
                // text+='<a href="'+url+'">'+lblx+'</a>';
                if (searchcnt <= 5 && null != lbl) {
                  if (searchcnt == 1) {
                    text += title;
                  }
                  searchcnt = searchcnt + 1;
                  validLoop = true;
                  text += '<div sr="1" class="vz-gui-result '
                      + (url ? ' vz-gui-search-url' : '') + '">';

                  var showUrl = url ? url : "";
                  if (showUrl != "" && showUrl != null) {
                    showUrl = Extranet
                        .rewriteUrl(showUrl);
                  }
                  var rlblx = lblx.replace(/'/g, "\\\'");
                  rlblx += '~~' + this.input.id;
                  text += '<div onclick="autoCompleletTrack(\''
                      + strip(rlblx)
                      + '\',\''
                      + showUrl
                      + '\');">'
                      + lblx
                      + '</div>';
                  /*
                   * if(url){ text+='<br /><span>'+url+'</span>' }
                   */
                } else if (searchcnt == 6) {

                  this.input = input.tagName ? input
                      : document
                      .getElementById(input);
                  var sn = document.getElementById(input).value
                      + '~~'
                      + document
                          .getElementById(input).id;
                  text += '<div class="vz-gui-view-all"><a onclick="GotoAllSearchResults(\''
                      + sn
                      + '\');">See all search results</a></div>';
                  searchcnt = searchcnt + 1;

                }
              }
              //jQuery('#searchOverlay div').removeClass(
              //		"loadinggif");
              //jQuery('#searchOverlayTop div').removeClass(
              //		"loadinggif");
              // jQuery('.intro-text').hide();
              text += '</div>';
              if (null != lbl && validLoop != false) {
                this.sPhrases[cnt] = lbl;
                this.sURLs[cnt++] = url ? url : "";
              }

            }
            validLoop = false;
          }
        }

      }


      if (peoplecnt == 1 && searchcnt == 1 && suggestedcnt == 1 && takeActcnt == 1) {
        text = "";
        document.getElementById('vz-gui-search-overlay-top').style.display = 'none';
        document.getElementById('vz-gui-search-span-arrow').style.display = 'none';
      }
      if(text == ""){
      }


      this.sInnerDiv.innerHTML = text;
      //$(this.sInnerDiv).show();
      this.sInnerDiv.style.display = 'block';
      document.getElementById('vz-gui-search-span-arrow').style.display = 'block';
      var spans = this.sInnerDiv.getElementsByTagName('SPAN');
      for (i = 0; i < spans.length; i++) {
        if (spans[i].parentNode == this.sInnerDiv) {
          spans[i].onclick = this.toggleSection;
        }
      }
      this.srDivs = [ '' ]
      var divs = this.sInnerDiv.getElementsByTagName('DIV');
      for (i = 0; i < divs.length; i++) {
        if (divs[i].getAttribute('sr')) {
          divs[i].onmouseover = this.highlight;
          // divs[i].onclick=this.chosen;
          divs[i].onmouseout = this.divMouseOut;
          this.srDivs[this.srDivs.length] = divs[i];
        }
      }
    }
  };
  this.init = function(clas) {
    var inputevent = this.input;
    inputevent.onkeydown = this.keyDown;
    inputevent.onkeyup = this.keyUp;
    this.arrowDiv = document.getElementById('vz-gui-search-span-arrow');
    this.arrowDiv.style.display	= 'none';
    this.clearSearch = document.getElementById('vz-gui-search-clear');
    this.clearSearch.style.display = 'none';
    this.sDiv = document.getElementById('vz-gui-search-overlay-top');
    this.sDiv.style.display = 'none';
    this.sInnerDiv = document.getElementById('vz-gui-search-results');
    if (CookieHandler.get('autoComplete')) {
      this.sInnerDiv.style.display = 'none'
    }

  };
  this.init(clas);
};


//} )();

//} )();


 
 /***********************************************
 Search Auto Suggest ends
 ***********************************************/


/***********************************************
 *******
 *******    Enterprise Header Service
 *******
 ***********************************************/

var dupvzGuiGlobalHeader = document.getElementsByClassName("vz-gui-global-header-local");
if(dupvzGuiGlobalHeader!=null && dupvzGuiGlobalHeader[0]!=null){
  document.getElementsByTagName('body')[0].removeChild(dupvzGuiGlobalHeader[0]);
}

// Global Namespace
if (typeof VZGLOBALUI == 'undefined') {
    VZGLOBALUI = {};
}


// Global Variables 

VZGLOBALUI.appName = (typeof VZGLOBALUIClientCustomizer != 'undefined'  && typeof VZGLOBALUIClientCustomizer.applicationName != 'undefined' ) ? VZGLOBALUIClientCustomizer.applicationName: '';

VZGLOBALUI.userProfileImage = ( typeof VZGLOBALUIClientCustomizer != 'undefined' && typeof VZGLOBALUIClientCustomizer.userProfileImageUrl != 'undefined' ) ? Extranet.rewriteUrl(VZGLOBALUIClientCustomizer.userProfileImageUrl) : Extranet.rewriteUrl('https://profilepicture.verizon.com/apps/photoapp/ImageServlet?eid=12345');    // Update the EID

VZGLOBALUI.isSupervisor = true;
VZGLOBALUI.pilot = true;   // Pilot search A/B Testing

//VZGLOBALUI.smartSearchIframeSrc = 'https://vzsearch2.ebiz.verizon.com/globalsearch/#/';
VZGLOBALUI.smartSearchIframeSrc = 'http://w16sacovn08.ebiz.verizon.com:83/search/resources/gsdist/#/';

VZGLOBALUI.sessionTime = new Date().getTime();
/*
 * @function - setActiveApplication
 * @description - set application's link class active
 *
 */
VZGLOBALUI.setActiveApplication = function(appName) {
    if (appName == VZGLOBALUI.appName)
        return true;
    else
        return false;
}




/*
 * @function - contructHeader
 * @description - To construct DOM wrapper for Global Header wrapper
 *
 */

VZGLOBALUI.constructHeader = function() {
    headerElm = document.createElement("header");
    headerElm.className = "vz-gui-global-header vz-gui-global-header-server"; // Global header wrapper
    headerElm.id = "vz-gui-global-header";
    headerElm.innerHTML = '<nav class="vz-gui-navbar vz-gui-navbar-default">' +
        '<div class="vz-gui-container" id="vz-gui-header-container">' +
            '<div class="vz-gui-navbar-header" id="vz-gui-navbar-header">' +
                '<a href="http://www.verizon.com/" class="vz-gui-navbar-brand"><span class="vz-gui-sr-only">Verizon Logo</span><span>'+VZGLOBALUI.appName+'</span></a>' +
            '</div>' +
        '</div>' +
    '</nav>' +
    '<div id="vz-gui-smartsearch-wrapper-container" class="vz-gui-container vz-gui-smartsearch-wrapper-container">'+
      '<span id="vz-gui-smartsearch-arrow" class="vz-gui-glyphicon vz-gui-glyphicon-triangle-top vz-gui-smartsearch-arrow" style="display: none"></span>' +
    '</div>';
    return headerElm;
}

VZGLOBALUI.constructHeaderMobile = function() {

    var buttonNav = document.createElement('button');
    buttonNav.className = "vz-gui-navbar-toggle vz-gui-visible-xs";
    var ariaSpan = document.createElement('span');
    ariaSpan.className = "vz-gui-sr-only";
    ariaSpan.innerHTML = "Global Menu Mobile Toggle"
    buttonNav.appendChild(ariaSpan);

    var buttonSearchToggle = document.createElement('button');
    buttonSearchToggle.className = "vz-gui-search-toggle vz-gui-visible-xs";
    var ariaSpan = document.createElement('span');
    ariaSpan.className = "vz-gui-sr-only";
    ariaSpan.innerHTML = "Search Mobile Toggle Button"
    buttonSearchToggle.appendChild(ariaSpan);

    var buttonProfileToggle = document.createElement('button');
    buttonProfileToggle.className = "vz-gui-profile-toggle vz-gui-visible-xs";
    var ariaSpan = document.createElement('span');
    ariaSpan.className = "vz-gui-sr-only";
    ariaSpan.innerHTML = "User Profile Mobile Toggle Button"
    buttonProfileToggle.appendChild(ariaSpan)

    var imgMobile = document.createElement('img');
    var imgMobileVal = VZGLOBALUI.userProfileImage;
    imgMobile.setAttribute("src", imgMobileVal);
    imgMobile.setAttribute("alt", "User\'s Profile Avatar");
    buttonProfileToggle.appendChild(imgMobile);

    var todoCount = document.createElement('span');
    todoCount.id = "vz-gui-todo-count-mobile";
    todoCount.className = "vz-gui-todo-count";
    todoCount.style.display = 'none';
    buttonProfileToggle.appendChild(todoCount);
    var navBarHeader = document.getElementById("vz-gui-navbar-header");
    navBarHeader.appendChild(buttonProfileToggle);
    navBarHeader.appendChild(buttonSearchToggle);
    navBarHeader.appendChild(buttonNav);

}


/*
 * @function - injectHeader
 * @description -  To inject the the header wrapper element into the DOM Body node
 *
 */

VZGLOBALUI.injectHeader = function() {
    var headerWrapper = VZGLOBALUI.constructHeader();
    var body = document.body;
    if 
        (body.firstChild) body.insertBefore(headerWrapper, body.firstChild);
    else 
        body.appendChild(headerWrapper);
}




/*
 * @function - constructGlobalMenuWrapper
 * @description - To contruct a wrapper for the global dropdown menu navigation
 */

VZGLOBALUI.constructGlobalMenuWrapper = function() {
    var navMenu = document.createElement("div");
    navMenu.className = "vz-gui-navbar-collapse vz-gui-toggle";
    navMenu.id = "vz-gui-navmenu";
    navMenu.setAttribute("style", "display: none");
    return navMenu;
}




/*
 * @function - injectGlobalMenuWrapper
 * @description - Injects the Global Menu into the Global Header wrapper 
 */

VZGLOBALUI.injectGlobalMenuWrapper = function() {
    var menuElm = VZGLOBALUI.constructGlobalMenuWrapper();
    var headerWrapper = document.getElementById("vz-gui-header-container");
    headerWrapper.appendChild(menuElm);
}


function getDefaultGlobalHeaderMenu(){
  return [{
    "title" : "VZWeb",
    "href" : "https://vzweb2.verizon.com",
    "extHref" : null,
    "newWindow" : false,
    "classes" : "vz-gui-icon vz-gui-icon-home",
    "active" : true,
    "submenu" : null
  },{
    "title" : "About You",
    "href" : "https://aboutyou.verizon.com/",
    "extHref" : null,
    "newWindow" : false,
    "classes" : null,
    "active" : false,
    "submenu" : null
  },
    {
      "title" : "Work Tools",
      "href" : "https://vzweb2.verizon.com/work-tools",
      "extHref" : null,
      "newWindow" : false,
      "classes" : null,
      "active" : false,
      "submenu" : null
    }];
  }
/*
 * @function - constructSecondaryMenu
 * @description - 
 */

VZGLOBALUI.contructGlobalMenu = function() {
    var GlobalMenu, menuData, mainMenu, linkTitle, linkUrl, menuItem, li;
    // Global menu namespace
    GlobalMenu = {};

    GlobalMenu.factory = function() {
        // fetch menu data
        menuData = getGlobalHeaderMenu();
      if(menuData == null ){
        menuData = getDefaultGlobalHeaderMenu();
      }
        // render main menu
        mainMenu = document.createElement('UL');
        mainMenu.className = 'vz-gui-nav vz-gui-navbar-nav';

        for (var i = 0; i < menuData.length; i++) {
          menuItem = menuData[i];
          linkTitle = document.createTextNode(menuItem.title);
          linkUrl = document.createElement('A');
          if ((menuItem.extHref !== null) && (menuItem.extHref !== '') && (menuItem.extHref !== undefined)) {
            linkUrl.setAttribute('href', menuItem.extHref);
          } else {
            if (menuItem.href !== null)
              linkUrl.setAttribute('href', Extranet.rewriteUrl(menuItem.href));
          }

          if (menuItem.newWindow)
            linkUrl.setAttribute('target', '_blank');
          if (menuItem.classes)
            GlobalMenu.addClasses(linkUrl, menuItem.classes);
          if (menuItem.lib)
            GlobalMenu.addLibs(linkUrl, menuItem.lib);
          linkUrl.appendChild(linkTitle);
          li = document.createElement('LI');
          // handle if there is a submenu for dropdown
          li.appendChild(linkUrl);
          if (menuItem.submenu !== null) {
            li.className = 'vz-gui-dropdown vz-gui-dropdown-primary vz-gui-' + menuItem.lib;
            var span = document.createElement('span');
            span.className = 'vz-gui-span-hover';
            li.appendChild(span);
            li.appendChild(GlobalMenu.buildDropDownMenu(menuData[i].submenu));
          }

          if (VZGLOBALUI.setActiveApplication(menuItem.title))
            li.className += ' vz-gui-active';

          mainMenu.appendChild(li);
        }


        return mainMenu;
    };




    /* @function buildMenu
     * @description: Function to iterate through the global menu object and produce the menu hierarchy structure
     */
    GlobalMenu.buildMenu = function() {
        mainMenu = this.factory();
        // add the menu to the page
        document.getElementById('vz-gui-navmenu').appendChild(mainMenu);
    };




    /* @function buildDropDownMenu
     * @description: Function to iterate through menu object and construct a dropdown menu structure
     */
    GlobalMenu.buildDropDownMenu = function(menuData) {
        // calculate total elements and total menus with submenus
        var i, ulist, list, div, span, columnDiv;

        // render the dropdown menu container wrapper
        ulist = document.createElement('UL');
        ulist.className = 'vz-gui-dropdown-menu';
        ulist.setAttribute("style", "display: none");
        list = document.createElement('LI');
        list.className = 'vz-gui-dropdown-content';
        ulist.appendChild(list);

        // render the columns
        for (i = 0; i < menuData.length; i++) {
            GlobalMenu.buildMenuColumn(list, menuData[i]);
        }
        // return the dropdown menu container
        return ulist;
    };




    /* @function buildMenuColumn
     * @description: Function to fetch and associate the menu links
     */
    GlobalMenu.buildMenuColumn = function(columnDiv, menuData) {
        var titleText, h3;
        h3 = document.createElement('H3');
        h3.className = 'vz-gui-title';
        linkTitle = document.createTextNode(menuData.title);
        linkUrl = document.createElement('A');
        if (menuData.lib)
            GlobalMenu.addLibs(linkUrl, menuData.lib);
        if ((menuData.extHref !== null) && (menuData.extHref !== '') && (menuData.extHref !== undefined)) {
            linkUrl.setAttribute('href', menuData.extHref);
            /* else */
            if (menuData.newWindow)
                linkUrl.setAttribute('target', '_blank');
            linkUrl.appendChild(linkTitle);
            h3.appendChild(linkUrl);
        } else {
            if ((menuData.href !== null) && (menuData.href !== '') && (menuData.href !== undefined)) {
                linkUrl.setAttribute('href', Extranet.rewriteUrl(menuData.href));
                /* else */
                if (menuData.newWindow)
                    linkUrl.setAttribute('target', '_blank');
                linkUrl.appendChild(linkTitle);
                h3.appendChild(linkUrl);
            } else {
                titleText = document.createTextNode(menuData.title);
                h3.appendChild(titleText);
            }
        }

        if (menuData.classes)
            GlobalMenu.addClasses(h3, menuData.classes);
        var ulist, list;
        ulist = document.createElement('UL');
        ulist.className = 'vz-gui-sub-dropdown';
        list = document.createElement('LI');

        list.appendChild(h3);

        if (menuData.submenu !== null) {
            list.className += 'vz-gui-dropdown';
            var listData = GlobalMenu.buildSubmenu(columnDiv, menuData.submenu);
            list.appendChild(listData);
        }
        ulist.appendChild(list);
        columnDiv.appendChild(ulist);
    };




    /* @function buildSubmenu
     * @description: Function to iterate through the menu object and constructs the submenu structure
     */
    GlobalMenu.buildSubmenu = function(columnDiv, menuData) {
        var ul, t, a, li, ulist, list;
        ul = document.createElement('UL');
        ul.className = 'vz-gui-dropdown-menu';
        //ul.setAttribute("style", "display: none");

        list = document.createElement('LI');
        list.className = 'vz-gui-dropdown-content';

        ul.appendChild(list);

        ulist = document.createElement('UL');
        list.appendChild(ulist);

        for (var i = 0; i < menuData.length; i++) {
            var tspan, ispan;
            tspan = document.createElement('SPAN');
            ispan = document.createElement('SPAN');
            t = document.createTextNode(menuData[i].title);
            var s =
                a = document.createElement('A');
            if ((menuData[i].extHref !== null) && (menuData[i].extHref !== '') && (menuData[i].extHref !== undefined)) {
                a.setAttribute('href', menuData[i].extHref);
            } else {
                if (menuData[i].href !== null)
                    a.setAttribute('href', Extranet.rewriteUrl(menuData[i].href));
            }

            if (menuData[i].newWindow)
                a.setAttribute('target', '_blank');
            ispan.className = 'vz-gui-icon';
            if (menuData[i].classes)
                GlobalMenu.addClasses(ispan, menuData[i].classes);
            if (menuData[i].lib)
                GlobalMenu.addLibs(a, menuData[i].lib);
            tspan.appendChild(t);
            a.appendChild(ispan);
            a.appendChild(tspan);
            li = document.createElement('LI');
            li.appendChild(a);
            ulist.appendChild(li);
        }

        return ul;
    };




    /* @function addClasses
     * @description: Function eliminate null values within class elements
     */
    GlobalMenu.addClasses = function(element, classes) {
        if (classes !== null) {
            if (element.className !== null)
                element.className += ' ' + classes;
            else
                element.className = classes;
        }
    }

    /* @function addLibs
     * @description: Function to add Lib attribute to links for Adobe analytics and tracking
     */
    GlobalMenu.addLibs = function(element, lib) {
        if (lib !== null)
            element.setAttribute('lib', lib);
    }



    // Return the GlobalMenuObject
    return GlobalMenu;
};




/*
 * @function - stocks.construct
 * @description - To construct a wrapper for Search component
 */
VZGLOBALUI.stocks = {

  'construct' : function(stocksData){
    var stocksWrapper = document.createElement('DIV');
    var stocksObj = stocksData;

    stocksWrapper.className = 'vz-gui-stocks';

    stocksWrapper.innerHTML = '<div id="vz-gui-stock-quotes" class="vz-gui-stock-quotes" style="display: none;">'+
        '<div class="vz-gui-stocks-label">Stocks</div>' + 
          this.iterateStocks(stocksObj.quotes) +
        '<div class="vz-gui-stocks-updated">As of '+ stocksObj.date +'</div>'+
      '</div>'+

      '<div class="vz-gui-quote-expander" id="vz-gui-quote-expander" title="Toggle Stocks View">'+
        this.fetchVerizonStock(stocksObj.quotes) +
        '<span tabindex="3" class="vz-gui-stock-toggle"></span>' +
      '</div>';

      var navbarHeader = document.getElementById("vz-gui-profile-menu");
      // stocks refresh every 5 mins interval, removeChild and appendChild again.
      //headerWrapper.appendChild(stocksWrapper);
      navbarHeader.parentNode.insertBefore(stocksWrapper, navbarHeader.nextSibling);
    // Stocks toggle
    var stocksExpander = document.getElementById('vz-gui-quote-expander');
    if(stocksExpander != null){
      var stockQuotes = document.getElementById('vz-gui-stock-quotes');
      stocksExpander.addEventListener("click", function() {
        VZGLOBALUI.toggleThis('vz-gui-stock-quotes', stocksExpander);
        if(VZGLOBALUI.pilot){ // Pilot search A/B Testing
          document.getElementById('vz-gui-smartsearch-overlay').style.display = 'none';
          document.getElementById('vz-gui-smartsearch-iframe').style.display = 'none';
          document.getElementById('vz-gui-smartsearch-arrow').style.display = 'none';
        } // Pilot search A/B Testing
        var padTop = document.getElementById('vz-gui-global-header');
        if (padTop.style.paddingTop == '35px')
          padTop.style.paddingTop = '0';
        else
          padTop.style.paddingTop = '35px';
      }, false);
    }
  },


  'fetchVerizonStock' : function(obj){
    var vzStock = '';
    for(var i=0; i < obj.length; i++){
      if(obj[i].symbol == 'VZ'){
        vzStock += 
          '<span class="vz-gui-stock-symbol">'+ obj[i].symbol +'</span>'+
          '<span class="vz-gui-stock-current">'+ obj[i].last +'</span>'+
          '<span class="vz-gui-stock-move vz-gui-move-'+ obj[i].move +'"></span>'+
          '<span class="vz-gui-stock-change vz-gui-change-'+ obj[i].move +'">'+ obj[i].change +'</span>';
        }
    }
    return vzStock;
  },


  'iterateStocks' : function(obj){
    var stock = '';
    for(var i=0; i < obj.length; i++){
      stock += 
      '<div class="vz-gui-stock">'+
        '<span class="vz-gui-stock-symbol">'+ obj[i].symbol +'</span>'+
        '<span class="vz-gui-stock-current">'+ obj[i].last +'</span>'+
        '<span class="vz-gui-stock-move vz-gui-move-'+ obj[i].move +'"></span>'+
        '<span class="vz-gui-stock-change vz-gui-change-'+ obj[i].move +'">'+ obj[i].change +'</span>'+
        '</div>'
    }
    return stock;
  }

}

/*
 * @function - checkSession
 * @description - Check and set a idle user session
 */

VZGLOBALUI.checkSession = function(){

  if(new Date().getTime() - VZGLOBALUI.sessionTime >= 900000) {
    VZGLOBALUI.sessionTime = new Date().getTime();
    window.location.reload(true);
  } else {
    VZGLOBALUI.sessionTime = new Date().getTime();
  }

} 


/*
 * @function - constructSearch
 * @description - To construct a wrapper for Search component
 */

VZGLOBALUI.constructSearch = function() {
    var searchWrapper = document.createElement("div");
    searchWrapper.className = "vz-gui-search-form";
    searchWrapper.id = "vz-gui-search-form";
    searchWrapper.innerHTML = '<div class="vz-gui-search-inner vz-gui-toggle" style="display: none;">' +
        '<span class="vz-gui-search-mobile-close" id="vz-gui-search-mobile-close"></span>' +
        '<div id="vz-gui-search-span-arrow" class="vz-gui-glyphicon vz-gui-glyphicon-arrow-up" style="display: none;"></div>' +
        '<div id="vz-gui-search-overlay-top" class="vz-gui-search-overlay-top vz-gui-toggle" style="display: none;">' +
        '<div id="vz-gui-search-results" class="vz-gui-search-results" style="display: none;"></div></div>' +
        '<div class="vz-gui-search-options"><div class="vz-gui-form-item">' +
        '<div id="vz-gui-edit-search-content" class="vz-gui-form-text vz-gui-select-dropdown-inner">' +
        '<label class="vz-gui-sr-only" for="vz-gui-edit-search-content-input">Search Intranet & People</label>' +
        '<input type="text" class="vz-gui-form-input" onfocus="if(this.value == \'Search Intranet & People\') { this.value = \'\'; }" onblur="if(this.value == \'\') { this.value = \'Search Intranet & People\'; }" value="Search Intranet & People" name="vz-gui-search-content" id="vz-gui-edit-search-content-input" tabindex="4"><span id="vz-gui-search-clear" class="vz-gui-search-clear" title="Clear" style="display: none;"></span></div></div>' +
        '<a id="vz-gui-href-header-search" title="Search" href="javascript:submitSearchHeader()" class="vz-gui-form-submit"><span class="vz-gui-sr-only">Submit Search</span></a></div>'+
        '<a class="vz-gui-adv-search" href="https://edirectory.verizon.com/eDirectory/" title="Advanced people search"><span class="vz-gui-sr-only">Advanced People Search</span><span class="vz-gui-glyphicon-plus"></span></a>' +
        '</div>';

    return searchWrapper;
}

// Pilot search A/B Testing
VZGLOBALUI.submitSmartSearch = function () {
  var searchText =  document.getElementById('vz-gui-smart-search-input').value;
  if (VZGLOBALUI.checkBlankChars(searchText) && VZGLOBALUI.checkSpecialChars(searchText)) {
    searchText = encodeURIComponent(searchText);
    if(searchText.length < 1)
      alert('Enter a keyword to search for');
    else
      window.location.href = Extranet.rewriteUrl(VZGLOBALUI.getVZSmartSearchURL() +searchText );
  }
}

VZGLOBALUI.getVZSmartSearchURL = function() {
  var VZ_SMART_SEARCH_URL = 'https://vzsearch2.ebiz.verizon.com/smartsearch/#/result/';
  return VZ_SMART_SEARCH_URL;
}

VZGLOBALUI.checkBlankChars = function (datafield) {

  if ( datafield === "Search Intranet & People" || datafield.trim().length === 0) {
    alert('Enter a keyword to search for');
    return false;
  }
  return true;
}

VZGLOBALUI.checkSpecialChars = function (datafield) {

  if (/[^a-zA-Z0-9\s\.\$\(\)\-\?\&\*\:\;\,\'\"\/\\]/.test(datafield)) {
    alert("Your input has special characters. \n Please remove them and try again.");
    return false;
  }
  return true;
}

// Pilot search A/B Testing
VZGLOBALUI.constructSmartSearch = function() {
    var smartSearchWrapper = document.createElement("div");
    smartSearchWrapper.className = "vz-gui-search-form";
    smartSearchWrapper.id = "vz-gui-search-form";
    smartSearchWrapper.innerHTML = '<div class="vz-gui-search-inner vz-gui-toggle" style="display: none;">' +
        '<span class="vz-gui-search-mobile-close" id="vz-gui-search-mobile-close"></span>' +
        '<div id="vz-gui-search-span-arrow" class="vz-gui-glyphicon vz-gui-glyphicon-arrow-up" style="display: none;"></div>' +
        '<div id="vz-gui-search-overlay-top" class="vz-gui-search-overlay-top vz-gui-toggle" style="display: none;">' +
        '<div id="vz-gui-search-results" class="vz-gui-search-results" style="display: none;"></div></div>' +
        '<div class="vz-gui-search-options"><div class="vz-gui-form-item">' +
        '<div id="vz-gui-edit-search-content" class="vz-gui-form-text vz-gui-select-dropdown-inner">' +
        '<label class="vz-gui-sr-only" for="vz-gui-search-content">Search Intranet & People</label>' +
        '<input type="text" class="vz-gui-form-input" onfocus="if(this.value == \'Search Intranet & People\') { this.value = \'\'; }" onblur="if(this.value == \'\') { this.value = \'Search Intranet & People\'; }" value="Search Intranet & People" name="vz-gui-search-content" id="vz-gui-smart-search-input" tabindex="4">'+
        '<span id="vz-gui-search-loading" class="vz-gui-search-loading" style="display: none;"><img src=" data:image/gif;base64,R0lGODlhFAAUAMQeAFxaXP39/QQCBHR2dGhmaPv7+6KhotjW2NfW1xYUFmdlZ/n5+XBvcH6AfhUTFfz8/KOio7CxsHFwcX1/faemp7GysainqHl4eXh3eLS1tLW2tdXU1bq4urWztf///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyNTQ4NUZDMEY5MkVFNTExOTU2OURDNzREODc1QTU4MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMzNCMTE4QTJFRkExMUU1QTJCQjk2OEZBNUM0Mzc1RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMzNCMTE4OTJFRkExMUU1QTJCQjk2OEZBNUM0Mzc1RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI3NDg1RkMwRjkyRUU1MTE5NTY5REM3NEQ4NzVBNTgwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI1NDg1RkMwRjkyRUU1MTE5NTY5REM3NEQ4NzVBNTgwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQYAHgAsAAAAABQAFAAABUOgJ45kaZ5oqq5s674wGWwctwXeXN85bc+dYOfg2QiHxeOBc+R4mEInNFhrPq3Tju2ISAq7xq/u19vhxryYes1uu90hACH5BAUGAB4ALAAABwAGAAYAAAUV4BM1U/RUQzpojTo0rdqgaiZO5RMCACH5BAUGAB4ALAAABwAGAAYAAAUV4MIkDrNIQipciSokrZqgKiY65RICACH5BAUGAB4ALAAABwANAAYAAAUlYGEQilF4ImlCQAtYHutahAsQXu0Seov3N1mLErNRRIrSCakMAQAh+QQFBgAeACwAAAcADQAGAAAFLWCwcdwWeAuTOMyydXB3eJJgCxcXd5yX3IKELtb73RKvGIIGxIhIJhTDwVqEAAAh+QQFBgAeACwHAAcADQAGAAAFJWBhEIpReCJpQkALWB7rWoQLEF7tEnqL9zdZixKzUUSK0gmpDAEAIfkEBQYAHgAsBwAHAA0ABgAABS1gsHHcFngLkzjMsnVwd3iSYAsXF3ecl9yChC7W+90SrxiCBsSISCYUw8FahAAAIfkEBQYAHgAsDgAHAAYABgAABRXgEzVT9FRDOmiNOjSt2qBqJk7lEwIAOw==" alt="..."/></span>'+
        '<span id="vz-gui-search-clear" class="vz-gui-search-clear" title="Clear" style="display: none;"></span></div></div>' +
        '<a id="vz-gui-smart-search-submit" title="Search" href="javascript:VZGLOBALUI.submitSmartSearch()" class="vz-gui-form-submit"></a></div>'+
        '<a class="vz-gui-adv-search" href="https://edirectory.verizon.com/eDirectory/" title="Advanced people search"><span class="vz-gui-glyphicon-plus"></span></a>' +
        '</div>';

    return smartSearchWrapper;
} // Pilot search A/B Testing


// Pilot search A/B Testing
VZGLOBALUI.smartSearchIframe = {
  'overlay' : function(){
    var overlayElm = document.createElement('DIV');
    overlayElm.className = 'vz-gui-smartsearch-overlay';
    overlayElm.id = 'vz-gui-smartsearch-overlay';
    overlayElm.style.display = 'none';

    overlayElm.onclick = function(){
      this.style.display = 'none';
      var iframeElm = document.getElementById('vz-gui-smartsearch-iframe');
      var arrowDown = document.getElementById('vz-gui-smartsearch-arrow');
      iframeElm.style.display = 'none';
      arrowDown.style.display = 'none';
    }
    return overlayElm;
  },

  'construct' : function(){
    var iframeElm = document.createElement('iframe');
    iframeElm.className = 'vz-gui-smartsearch-iframe';
    iframeElm.id = 'vz-gui-smartsearch-iframe';
    iframeElm.src = VZGLOBALUI.smartSearchIframeSrc;  // Pilot search A/B Testing
    iframeElm.style.display = 'none';
    iframeElm.width = '100%';
    iframeElm.height = '525px';
    iframeElm.scrolling = 'yes';
    return iframeElm;
  },

  'inject' : function(){
    var iframeElm = this.construct();
    var overlayElm = this.overlay();
    //var headerElm = document.getElementById('vz-gui-global-header');
    var headerWrapper = document.getElementById('vz-gui-smartsearch-wrapper-container');
    headerWrapper.appendChild(overlayElm);
    headerWrapper.appendChild(iframeElm); 
  },
  'hideIframe' : function(){

    var overlayElm = document.getElementById('vz-gui-smartsearch-overlay');
    var iframeElm = document.getElementById('vz-gui-smartsearch-iframe');
    var arrowDown = document.getElementById('vz-gui-smartsearch-arrow');

    iframeElm.style.display = 'none';
    overlayElm.style.display = 'none';
    arrowDown.style.display = 'none';

  },

  'messageListener': function(event){
    var resp = eval('(' + event.data + ')');
    if (resp.type == "HIDEIFRAME") {
      VZGLOBALUI.smartSearchIframe.hideIframe();
    }else if (resp.type == "READY") {
      VZGLOBALUI.smartSearchIframe.resendMessage();
    }

  },

  'resendMessage' : function(){
    var searchInput = document.getElementById('vz-gui-smart-search-input');
    var overlayElm = document.getElementById('vz-gui-smartsearch-overlay');
    var iframeElm = document.getElementById('vz-gui-smartsearch-iframe');
    var searchClearElm = document.getElementById('vz-gui-search-clear');
    var arrowDown = document.getElementById('vz-gui-smartsearch-arrow');
    var searchLoader = document.getElementById('vz-gui-search-loading');
    var navbar = document.querySelector('.vz-gui-navbar.vz-gui-navbar-default');

    if(searchInput.value.length >= 2 && searchInput.value != 'Search Intranet & People') {
      var regSearchTypeMsg = '{"type" : "SEARCH", "msg" : "'+searchInput.value+'"}';
      iframeElm.contentWindow.postMessage(regSearchTypeMsg, '*');


      searchClearElm.style.display = 'block';
      iframeElm.style.display = 'block';
      overlayElm.style.display = 'block';
      arrowDown.style.display = 'block';
      navbar.style.zIndex = '1005';
      searchLoader.style.display = 'block';
      if (navigator.userAgent.indexOf('MSIE') == -1)
        searchInput.style.width = "70%";

      setTimeout(function(){
        searchLoader.style.display = 'none';
      }, 1000);
    }
  },
  'query' :function(){
    var searchInput = document.getElementById('vz-gui-smart-search-input');
    var overlayElm = document.getElementById('vz-gui-smartsearch-overlay');
    var iframeElm = document.getElementById('vz-gui-smartsearch-iframe');
    var searchClearElm = document.getElementById('vz-gui-search-clear');
    var arrowDown = document.getElementById('vz-gui-smartsearch-arrow');
    var searchLoader = document.getElementById('vz-gui-search-loading');
    var navbar = document.querySelector('.vz-gui-navbar.vz-gui-navbar-default');
    var tempSearchInput = '';

    searchInput.onkeyup = function(){
      //if (VZGLOBALUI.smartSearchIframe.checkCookie('SMSESSION')){


      if(this.value.length >= 1){
        searchClearElm.style.display = 'block';
      }
      else if(this.value.length == 0){
        searchClearElm.style.display = 'none';
      }
      if(this.value.length >= 2 && this.value != 'Search Intranet & People') {
          /*iframeElm.src = 'http://w16sacovn08.ebiz.verizon.com:83/smartsearch/#/global/' + this.value;
            iframeElm.height = "";
            iframeElm.height = iframeElm.contentWindow.document.body.scrollHeight + "px";*/

          //Prevent duplicate requests due to multiple trigger of keyup for same keyword
          if(tempSearchInput != this.value){
            var regSearchTypeMsg = '{"type" : "SEARCH", "msg" : "'+this.value+'"}';
            iframeElm.contentWindow.postMessage(regSearchTypeMsg, '*');
          }

          tempSearchInput = this.value;
          searchClearElm.style.display = 'block';
          iframeElm.style.display = 'block';
          overlayElm.style.display = 'block';
          arrowDown.style.display = 'block';
          navbar.style.zIndex = '1005';
          searchLoader.style.display = 'block';
          if (navigator.userAgent.indexOf('MSIE') == -1)
            searchInput.style.width = "70%";
          iframeElm.onload = function(){
              searchLoader.style.display = 'none';
          };
          setTimeout(function(){
              searchLoader.style.display = 'none';
          }, 1000);
        }
        else{

        if(this.value.length == 1){
          var singleCharTypeMsg = '{"type" : "SINGLECHAR"}';
          iframeElm.contentWindow.postMessage(singleCharTypeMsg, '*');
        }
          iframeElm.style.display = 'none';
          overlayElm.style.display = 'none';
          arrowDown.style.display = 'none';
          navbar.style.zIndex = '1008';
          searchInput.style.width = "99%";
        }
      tempSearchInput = this.value;
      //}else{
      //  //SESSION EXPIRED
      //
      //  iframeElm.style.display = 'none';
      //  overlayElm.style.display = 'none';
      //  arrowDown.style.display = 'none';
      //  searchClearElm.style.display = 'none';
      //}
    }

    searchInput.onkeypress = function(e){
      var event = e || window.event;
      var charCode = event.which || event.keyCode;

      if ( charCode == '13' ) {
        if(this.value.length < 1 && this.value != '')
          alert('Enter a keyword to search for');
        else
          VZGLOBALUI.submitSmartSearch();
        return false;
      }
    }
  },

  'checkCookie' : function(name){
    return this.readCookie(name) != null;
  },
  'readCookie' : function (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
}
// Pilot search A/B Testing

/*
 * @function - injectSearch
 * @description - Injects search wrapper into the Global Headerv wrapper
 */



VZGLOBALUI.injectSearch = function() {
    var searchElm = VZGLOBALUI.constructSearch();
    var smartSearchElm = VZGLOBALUI.constructSmartSearch();
    var headerWrapper = document.getElementById("vz-gui-header-container");
    if (VZGLOBALUI.pilot)  // Pilot search A/B Testing
      headerWrapper.appendChild(smartSearchElm);    // Pilot search A/B Testing
    else  // Pilot search A/B Testing
      headerWrapper.appendChild(searchElm);  // Pilot search A/B Testing
}

var IntranetAutoSuggest = "";
VZGLOBALUI.initializeAutoCompleteObj = function() {
    //IntranetAutoSuggest = new AutoComplete('edit-search-content-input','https://vzsearch.ebiz.verizon.com/search/cgi-bin/velocity?v.app=nav-autocomplete-json-ayng&division=wireline&position=Top&num=10', 'vz-gui-search-overlay-top');
    IntranetAutoSuggest = new AutoComplete('vz-gui-edit-search-content-input', 'https://vzsearch.verizon.com/search/cgi-bin/velocity?v.app=nav-autocomplete-json-ayng&division=wireline&position=Top&num=10', 'vz-gui-search-overlay-top');

}



VZGLOBALUI.todos = {

  'constuct': function(todosData){
    var todoItems = '';
    if (todosData.todos != undefined){
      var todosCount = todosData.todos.length;
      if (todosCount > 0){

        var todoEmptyElm = document.getElementById('vz-gui-my-todo-items-empty');
        todoEmptyElm.style.display = 'none';

        var todoCountDesktopElm = document.getElementById('vz-gui-todo-count-desktop');
        todoCountDesktopElm.innerHTML = todosCount;
        todoCountDesktopElm.style.display = 'block';

        var myTodoCountElm = document.getElementById('vz-gui-my-todo-count');
        myTodoCountElm.innerHTML = todosCount;
        myTodoCountElm.style.display = 'block';

        var todoCountMobileElm = document.getElementById('vz-gui-todo-count-mobile');
        todoCountMobileElm.innerHTML = todosCount;
        todoCountMobileElm.style.display = 'block';


      }
      var maxTodos = 3;
      for (var i=0; i<todosData.todos.length && i<maxTodos; i++){
        if(todosData.todos[i].completeByOnClick == true){
          todoItems += '<li><a target="_blank" onClick="javascript:VZGLOBALUI.todos.updateTodoStatus(\''+ todosData.todos[i].providerId +'\',\'' + todosData.todos[i].definition_id +'\',\''+ todosData.todos[i].toDoId +'\')" href="'+ todosData.todos[i].url +'">'+ todosData.todos[i].subject +'</a></li>';
        }else{
          todoItems += '<li><a target="_blank" href="'+ todosData.todos[i].url +'">'+ todosData.todos[i].subject +'</a></li>';
        }

      }

      var todoItemsElm = document.getElementById('vz-gui-my-todo-items');
      todoItemsElm.innerHTML = todoItems;
      todoItemsElm.style.display = 'block';

      if(VZGLOBALUI.isSupervisor){
        var addTodoElm= document.getElementById("vz-gui-add-todo");
        addTodoElm.style.display = 'block';
      }
    }

  }, //End of todos.construct()

  'updateTodoStatus': function(providerId,definitionId,todoId){
    var updateTodoScript = document.createElement('script');
    var todoHost = 'http://localhost:8282';
    var udpateTodoStatusUrl = todoHost+'/apps/todos/todo?updatetodostatus&provider_id='+ providerId + '&definition_id='+ definitionId + '&todo_id=' +todoId;
    updateTodoScript.src = udpateTodoStatusUrl;
    document.getElementsByTagName('head')[0].appendChild(updateTodoScript);
  }

}

/*
 * @function - constructProfile
 * @description - To construct DOM for User profile dropdown
 */
VZGLOBALUI.constructProfile = function() {

    var profileWrapperElm, profileContentElm, userLogoutUrl,nickName,viewAll,addTodos;

    userLogoutUrl = '$LOGOUT_URL';
    nickName = '$USER_NICKNAME';
    if(nickName.trim().length != 0){
      userName =nickName;
    }else{
      userName ='$USER_FIRSTNAME';
    }
    userFullName = '$USER_FIRSTNAME'+' '+'$USER_LASTNAME';
    viewAll = '$VIEWALL_TODOS';
    addTodos = '$ADD_TODOS';

    profileWrapperElm = document.createElement("div");
    profileWrapperElm.className = "vz-gui-dropdown vz-gui-pull-right vz-gui-pull-mobile-none";
    profileWrapperElm.id = "vz-gui-profile-menu";
    profileWrapperElm.style.display = "none";
    profileWrapperElm.innerHTML = '<a class="vz-gui-dropdown-toggle" href="javascript:void(0)" title="User Profile Toggle">' +
      '<span class="vz-gui-name">' + userName + '</span>' + 
      '<span class="vz-gui-glyphicon vz-gui-glyphicon-chevron-down"></span>' +
      '<img alt="Profile Image" src="' + VZGLOBALUI.userProfileImage + '">'+
      '<span id="vz-gui-todo-count-desktop" class="vz-gui-todo-count" style="display: none;"></span>'+
    '</a>' +
    '<div class="vz-gui-dropdown-menu vz-gui-profile-dropdown vz-gui-toggle" id="vz-gui-profile-dropdown" role="menu" style="display: none;">'+
        '<div class="vz-gui-ui-tooltip-tip"><span class="vz-gui-glyphicon vz-gui-glyphicon-triangle-top"></span></div>' +
        '<div id="vz-gui-my-todos" class="vz-gui-my-todos">'+
          '<h4>My To-Dos</h4><span id="vz-gui-my-todo-count" class="pull-right vz-gui-todo-count vz-gui-my-todo-count" style="display: none;"></span>'+
        '<ul id="vz-gui-my-todo-items-empty">' +
        '<li>You do not have any active To-Dos</li>'+
        '</ul>'+
        '<ul id="vz-gui-my-todo-items" style="display: none;"></ul>'+
          '<ul class="vz-gui-todo-showall">'+
            '<li class="vz-gui-pull-left"><a target ="_blank" href="'+ viewAll +'" title="View all To-Dos">View all <span class="vz-gui-btn-arrow"></span></a></li>'+
            '<li id="vz-gui-add-todo" class="vz-gui-pull-right" style="display: none;"><a target = "_blank" href="'+ addTodos +'" title="Add To-Dos">Add To-Dos <span class="vz-gui-btn-arrow"></span></a></li>'+
            '<span class="vz-gui-clearfix"></span>'+
          '</ul>'+
        '</div>'+
        '<div class="vz-gui-user-info">'+
            '<div class="vz-gui-user-links">'+
                '<ul class="vz-gui-list-unstyled">'+
                     getUserProfileLinks() +
                '</ul>' +
            '</div>' +
        '</div>' +
        '<div class="vz-gui-clearfix"></div>' +
    '</div>';

    function getUserProfileLinks(){
        var userProfileLinksArray, profileLinks;
        profileLinks = '';
        if (typeof VZGLOBALUIClientCustomizer != 'undefined' && typeof VZGLOBALUIClientCustomizer.userProfileLinks != 'undefined'){
            userProfileLinksArray = VZGLOBALUIClientCustomizer.userProfileLinks;
            for(var i=0; i<userProfileLinksArray.length; i++){
                profileLinks += '<li><a href="'+ Extranet.rewriteUrl(userProfileLinksArray[i].url) + '" title="'+ userProfileLinksArray[i].label + '">'+ userProfileLinksArray[i].label + '</a></li>';
            }
        }
        return profileLinks;
    } 

    return profileWrapperElm;
}




/*
 * @function - injectProfile
 * @description - Injects User profile element into the Global Header wrapper
 */

VZGLOBALUI.injectProfile = function() {
    var profileElm = VZGLOBALUI.constructProfile();
    var headerWrapper = document.getElementById("vz-gui-header-container");
    headerWrapper.appendChild(profileElm);
}


/*
 * @function - toggleElements
 * @description - Function to toggle show/hide components
 */

VZGLOBALUI.toggleElements = function() {
    var profileElm, searchInput, searchElm, searchCloseElm, searchContainer, searchClearElm, menuElm, subMenuElm;

    // Search toggle for mobile menu
    searchElm = document.getElementsByClassName("vz-gui-search-toggle")[0];

    if (VZGLOBALUI.pilot)  // Pilot search A/B Testing
      searchInput = document.getElementById('vz-gui-smart-search-input');  // Pilot search A/B Testing
    else   // Pilot search A/B Testing
      searchInput = document.getElementById('vz-gui-edit-search-content-input');  // Pilot search A/B Testing

    searchContainer = document.getElementById("vz-gui-search-form").getElementsByClassName("vz-gui-search-inner")[0];
    searchContainer.setAttribute("id", "vz-gui-search-container");
    searchBox = document.querySelector('div.vz-gui-search-options');

    // search input font weight
    searchInput.onchange = function(e){
      if( this.value != '' && this.value != 'Search Intranet & People'){
        searchInput.style.fontWeight = '700';
        searchInput.style.color = "#000";
      }
      else if (this.value == '') {
       searchInput.style.fontWeight = '400';
       searchInput.style.color = "#4b4b4b";
       searchBox.style.borderColor = '#333';
      }
    }

  searchInput.addEventListener('click', function(){

    if (VZGLOBALUI.pilot){
      var iframeElm = document.getElementById('vz-gui-smartsearch-iframe');
      var onClickTypeMsg = '{"type" : "ONCLICK"}';
      iframeElm.contentWindow.postMessage(onClickTypeMsg, '*');
    }

  });

    searchInput.addEventListener('focus', function(){
        searchBox.style.borderColor = '#333';
    });
    searchInput.addEventListener('blur', function(){
      //if (VZGLOBALUI.pilot){
      //  VZGLOBALUI.smartSearchIframe.hideIframe();
      //}

        searchBox.style.borderColor = '#CCC';
    });

    searchElm.addEventListener("click", function() {
        VZGLOBALUI.toggleThis('vz-gui-search-container', searchElm);
        searchInput.focus();
    }, false);


    // Close search for mobile menu
    searchCloseElm = document.getElementById("vz-gui-search-mobile-close");
    searchCloseElm.addEventListener("click", function() {
        VZGLOBALUI.toggleThis('vz-gui-search-container', searchCloseElm);
        searchInput.value = 'Search Intranet & People';
        if(VZGLOBALUI.pilot){ // Pilot search A/B Testing
          document.getElementById('vz-gui-smartsearch-overlay').style.display = 'none';
          document.getElementById('vz-gui-smartsearch-iframe').style.display = 'none';
          document.getElementById('vz-gui-smartsearch-arrow').style.display = 'none';
        } // Pilot search A/B Testing
    }, false);

    // Clear search and toggle for mobile menu
    searchClearElm = document.getElementById("vz-gui-search-clear");
    searchClearElm.addEventListener("click", function() {
        document.getElementById('vz-gui-search-overlay-top').style.display = 'none';
        searchClearElm.style.display = "none";
        searchInput.value = "Search Intranet & People";
        searchInput.style.width = "99%";
        searchInput.style.fontWeight = '400';
        document.getElementById('vz-gui-search-span-arrow').style.display = 'none';
        if(VZGLOBALUI.pilot){ // Pilot search A/B Testing
          document.getElementById('vz-gui-smartsearch-overlay').style.display = 'none';
          document.getElementById('vz-gui-smartsearch-iframe').style.display = 'none';
          document.getElementById('vz-gui-smartsearch-arrow').style.display = 'none';
        } // Pilot search A/B Testing

    }, false);

    // User Profile menu toggle for mobile
    mobileProfileElm = document.getElementsByClassName('vz-gui-profile-toggle')[0];
    mobileProfileElm.addEventListener("click", function() {
        VZGLOBALUI.toggleThis('vz-gui-profile-dropdown', mobileProfileElm);
    }, false);

    // User Profile menu toggle for desktop
    profileElm = document.getElementsByClassName('vz-gui-dropdown-toggle')[0];


    profileElm.addEventListener("click", function() {
        var navbar = document.querySelector('.vz-gui-navbar.vz-gui-navbar-default');
        navbar.style.zIndex = '1008';
        if(VZGLOBALUI.pilot){ // Pilot search A/B Testing
          document.getElementById('vz-gui-smartsearch-overlay').style.display = 'none';
          document.getElementById('vz-gui-smartsearch-iframe').style.display = 'none';
          document.getElementById('vz-gui-smartsearch-arrow').style.display = 'none';
        } // Pilot search A/B Testing
        VZGLOBALUI.toggleThis('vz-gui-profile-dropdown', profileElm);
    }, false);


    // Global navigation menu toggle for mobile
    document.querySelector('a.vz-gui-navbar-brand > span').addEventListener('click', function(event) {
        event.preventDefault();
    });
    menuElm = document.getElementsByClassName('vz-gui-navbar-toggle')[0];
    menuElm.addEventListener("click", function() {
        VZGLOBALUI.toggleThis('vz-gui-navmenu', menuElm);
    }, false);

    // Toggle Menu only for mobile breakpoints
    if (parseInt(window.innerWidth) < 767)
        toggleMobileMenu();

    // Toggle menu for tablet devices
    else if( navigator.userAgent.match(/iPad/i) || ( navigator.userAgent.match(/Android/i) && (parseInt(window.innerWidth) >= 601) ) ){
       menuDropdownTabletToggle();
    } 
       
    // Toggle hover menu only for medium and up breakpoints
    else{
        //menuDropdownTabletToggle();
        menuDropdownToggle();
        toggleAlternate();
    }

    // Mobile menu toggle function 
    function toggleMobileMenu() {
        // Sub menu navigation toggle for mobile
        subMenuElm = document.getElementById("vz-gui-navmenu").querySelectorAll("ul.vz-gui-navbar-nav  > li.vz-gui-dropdown");
        var subMenuLinkElm, subMenuContentElm, listArray, listId;
        subMenuLinkElm = [];
        listArray = [];

        for (var i = 0; i < subMenuElm.length; i++) {
            subMenuElm[i].getElementsByClassName("vz-gui-dropdown-menu")[0].setAttribute("id", "vz-gui-sub-dropdown-" + i);
            listArray.push('vz-gui-sub-dropdown-' + i);
            subMenuLinkElm.push(subMenuElm[i].firstChild);
            iterateClickHandler(subMenuLinkElm, listArray, i);
        }

        /*
         * @function iterateClickHandler
         */

        function iterateClickHandler(link, elm, i) {
            link[i].addEventListener('click', function(e) {
                e.preventDefault();
                VZGLOBALUI.toggleThis(elm[i], link[i]);
            }, false)
        }

    }

    // Menu toggle for tablet devices
    function menuDropdownTabletToggle(){
       //Global Dropdown menu hover
        var menuDropElms, menuElm, menuList, menuhoverContent, timer;
        menuList = [];
        menuContentList = [];
        menuDropElms = document.querySelectorAll('li.vz-gui-dropdown-primary');
        for (var i = 0; i < menuDropElms.length; i++) {
            menuList.push(menuDropElms[i]);
            menuContentList.push(menuDropElms[i].getElementsByTagName('UL')[0]);
            iterateToggleHandler(menuContentList, menuList, i);
        }

        var subMenuDropElms = document.querySelectorAll('ul.vz-gui-sub-dropdown');
        var subMenuList = [];
        var subMenuContentList = [];
        for (var i = 0; i < subMenuDropElms.length; i++) {
            subMenuList.push(subMenuDropElms[i]);
            subMenuContentList.push(subMenuDropElms[i].getElementsByTagName('UL')[0]);
            iterateToggleHandler(subMenuContentList, subMenuList, i);
        }

        var profileDrop = document.getElementById('vz-gui-profile-dropdown');
        var searchArrow = document.getElementById('vz-gui-search-span-arrow');
        var searchResultsContainer = document.getElementById('vz-gui-search-overlay-top');
        var navbar = document.querySelector('.vz-gui-navbar.vz-gui-navbar-default');

        function iterateToggleHandler(content, list, i) {
            list[i].addEventListener('touchstart', function(e) {
                //e.preventDefault();
                if( this.getAttribute('data-clicked') == true || this.getElementsByTagName('ul').length <= 0){
                  this.setAttribute('data-clicked', false);
                    return true;
                }
                else if( this.getAttribute('data-clicked') == null || this.getAttribute('data-clicked') == false){
                    this.setAttribute('data-clicked', true);
                    e.preventDefault();
                    for(var m=0; m<content.length; m++){
                      if(content[m] == content[i])
                        content[m].style.display = 'block';
                      else{
                        if( typeof(content[m]) != 'undefined')
                          content[m].style.display = 'none';
                      }
                      
                    }

                    //menuContentList[i].style.display = 'block';
                    
                    // hide profile, search dropdowns on menu link hover
                    profileDrop.style.display = 'none';
                    searchArrow.style.display = 'none';
                    searchResultsContainer.style.display = 'none';
                    if(VZGLOBALUI.pilot){ // Pilot search A/B Testing
                      document.getElementById('vz-gui-smartsearch-overlay').style.display = 'none';
                      document.getElementById('vz-gui-smartsearch-iframe').style.display = 'none';
                      document.getElementById('vz-gui-smartsearch-arrow').style.display = 'none';
                    } // Pilot search A/B Testing
                    navbar.style.zIndex = '1008';
                }

            });
        }
    }

    // Menu toggle on hover for desktop
    function menuDropdownToggle() {
        //Global Dropdown menu hover
        var menuDropElms, menuElm, menuList, menuhoverContent, timer;
        menuList = [];
        menuContentList = [];
        menuDropElms = document.querySelectorAll('li.vz-gui-dropdown-primary');
        for (var i = 0; i < menuDropElms.length; i++) {
            menuList.push(menuDropElms[i]);
            menuContentList.push(menuDropElms[i].getElementsByTagName('UL')[0]);
            iterateToggleHandler(menuContentList, menuList, i);
        }

        var profileDrop = document.getElementById('vz-gui-profile-dropdown');
        var searchArrow = document.getElementById('vz-gui-search-span-arrow');
        var searchResultsContainer = document.getElementById('vz-gui-search-overlay-top');
        var navbar = document.querySelector('.vz-gui-navbar.vz-gui-navbar-default');

        function iterateToggleHandler(menuContentList, menuList, i) {
            menuList[i].addEventListener('mouseenter', function(e) {
                timer = setTimeout(function() {
                    menuContentList[i].style.display = 'block';
                    // hide profile, search dropdowns on menu link hover
                    profileDrop.style.display = 'none';
                    searchArrow.style.display = 'none';
                    searchResultsContainer.style.display = 'none';
                    if(VZGLOBALUI.pilot){ // Pilot search A/B Testing
                      document.getElementById('vz-gui-smartsearch-overlay').style.display = 'none';
                      document.getElementById('vz-gui-smartsearch-iframe').style.display = 'none';
                      document.getElementById('vz-gui-smartsearch-arrow').style.display = 'none';
                    } // Pilot search A/B Testing
                    navbar.style.zIndex = '1008';
                }, 500);
            });

            menuList[i].addEventListener('mouseleave', function(e) {
                //menuContentList[i].style.display ='none';
                clearTimeout(timer);
                menuContentList[i].style.display = 'none';
                navbar.style.zIndex = '1005';
            });
        }
    }


    // Providing multiple even't to a EventListner 
    function addListenerMulti(el, s, fn) {
        var evts = s.split(' ');
        for (var i = 0, iLen = evts.length; i < iLen; i++) {
            el.addEventListener(evts[i], fn, false);
        }
    }

    // hide elements when clicked anywhere else on the body DOM element.
    function toggleAlternate(){
        var profileDrop = document.getElementById('vz-gui-profile-dropdown');
        var searchArrow = document.getElementById('vz-gui-search-span-arrow');
        var searchResultsContainer = document.getElementById('vz-gui-search-overlay-top');
        var menuLinks = document.querySelectorAll('li.vz-gui-dropdown-primary');
        var navbar = document.querySelector('.vz-gui-navbar.vz-gui-navbar-default');
        document.onclick = function(evt) {
            var evt, elmClicked;
            evt = window.event || evt; // window.event for IE
            if (!evt.target) { // extend target property for IE
                evt.target=evt.srcElement;
                elmClicked = (evt.target.parentElement != null && evt.target.parentElement.parentElement != null) ? evt.target.parentElement.parentElement.id : null;
                
            } // extend target property for IE 
            else
                elmClicked = (evt.target.parentElement != null && evt.target.parentElement.parentElement != null) ? evt.target.parentElement.parentElement.id : null;

            /*if (evt.target.id != 'vz-gui-edit-search-content-input'){}*/
            if (elmClicked != 'vz-gui-profile-menu' && elmClicked != 'vz-gui-profile-dropdown'){
                profileDrop.style.display = 'none';
            }
            if (elmClicked != 'vz-gui-search-container'){
                searchArrow.style.display = 'none';
                searchResultsContainer.style.display = 'none';
            }
        }
    }
    
}


/*
 * @function toggle
 * @description: Funtion to toggle element
 */

VZGLOBALUI.toggleThis = function(obj, srcElm) {
    var el, srcElm, dropdownElms, toggleClassElms;
    dropdownElms = document.querySelectorAll('.vz-gui-toggle');
    toggleClassElms = document.querySelectorAll("[toggle='vz-gui-expanded']");
    el = document.getElementById(obj);
    if (el.style.display != 'none' || el.style.display == null) {
        el.style.display = 'none';
        if (srcElm != undefined)
            srcElm.setAttribute('toggle', 'vz-gui-collapsed');
    } else {
        if (el.id.indexOf('vz-gui-sub-dropdown') == -1) {
            for (var i = 0; i < dropdownElms.length; i++) {

                dropdownElms[i].style.display = 'none';
            }
            for (var i = 0; i < toggleClassElms.length; i++) {
                toggleClassElms[i].setAttribute('toggle', 'vz-gui-collapsed');
            }
        }
        el.style.display = 'block';
        if (srcElm != undefined)
            srcElm.setAttribute('toggle', 'vz-gui-expanded');
    }
}



/*
 * @function modifyHeaders
 * @description: Funtion to inject meta and body class to the HTML DOM
 */

VZGLOBALUI.modifyHeaders = function() {

    // Compatibility meta
    /*var httpMeta = document.createElement('meta');
    httpMeta.setAttribute("content", "IE=Edge");
    httpMeta.setAttribute("http-equiv", "X-UA-Compatible");
    document.getElementsByTagName('head')[0].appendChild(httpMeta);*/

    // viewport meta 
    /*var viewportMeta = document.createElement('meta');
    viewportMeta.setAttribute("name", "viewport");
    viewportMeta.setAttribute("content", "width=device-width, initial-scale=1");
    document.getElementsByTagName('head')[0].appendChild(viewportMeta);*/

    // append body class
    var htmlBody = document.getElementsByTagName('body')[0];
    htmlBody.className += ' vz-gui-body';


    /* 
     * Append class for bootstrap enabled applications
     */

    var bs = isBootstrap();
    if (bs && bs != 'undefined')
        htmlBody.className += ' vz-gui-bootstrap-body';

    // function to check if end application has Bootstrap loaded
    function isBootstrap(){
      var st = document.styleSheets;
      for (var i=0; i< st.length; i++){
        if (st[i].href != null && st[i].href.indexOf("bootstrap") > -1){  
          return true;
        }
      }
    }

    /* 
     * Custom Width for header
     */

    var headerWidth = (typeof VZGLOBALUIClientCustomizer != 'undefined'  && typeof VZGLOBALUIClientCustomizer.customHeaderwidth != 'undefined' ) ? VZGLOBALUIClientCustomizer.customHeaderwidth: '';

    switch(headerWidth) {
        case '100%':
            htmlBody.className += ' vz-gui-fullwidth';
            break;
        case '1200px':
            htmlBody.className += ' vz-gui-expandedwidth';
            break;
        default:
            htmlBody.className += '';
    } 
    
}

VZGLOBALUI.displayUserProfile = function() {
    var userProfileDropDown = document.getElementById('vz-gui-profile-menu');
    userProfileDropDown.style.display = 'block';
}


VZGLOBALUI.vzGlobaluiConstructDummyDiv = function() {
    var dummyWrapper = document.createElement("div");
    dummyWrapper.className = "vz-gui-dummy-div";
    dummyWrapper.id = "vz-gui-dummy-div";
    dummyWrapper.setAttribute("style", "display: none");
    dummyWrapper.innerHTML = ' ';
    return dummyWrapper;
}


VZGLOBALUI.injectDummyMenuWrapper = function() {
    var dummyDivElm = VZGLOBALUI.vzGlobaluiConstructDummyDiv();
    var headerWrapper = document.getElementById("vz-gui-header-container");
    headerWrapper.appendChild(dummyDivElm);
}



var VZFAVORITES = {
  targets: new Array(),
  favorites: null,
  favoritesModifiedObj:null,
  proxyURL: "https://globalui.ebiz.verizon.com/favoritesProxy.html",
  proxyIFrame: null,
  sessionTime:new Date().getTime(),
  registerTarget: function(target) {
    VZFAVORITES.targets.push(target);
  },
  load: function() {
    if (VZFAVORITES.proxyIFrame == null) {
      VZFAVORITES.initialize();
    } else {
      VZFAVORITES.updateTargets();
    }
  },
  reload: function() {
    if (VZFAVORITES.proxyIFrame == null) {
      VZFAVORITES.initialize();
    } else {
      VZFAVORITESProxyIFrame.contentWindow.postMessage({
        "vzFavoritesProxyMessage" : "GET"
      },VZFAVORITESProxyURL);
    }
  },
  updateTargets: function() {
    for (var i = 0; i < VZFAVORITES.targets.length; i++) {
      VZFAVORITES.targets[i](VZFAVORITES.favorites);
    }
  },
  edit: function() {
    VZGLOBALUI.favoritesModal.getModalContent('edit');

  },
  viewAll: function() {
    VZGLOBALUI.favoritesModal.getModalContent('view');
  },
  initialize: function() {
    if (VZFAVORITES.proxyIFrame == null) {
      /*if (window.addEventListener) {
        addEventListener("message", VZFAVORITES.listener, false);
      } else {
        attachEvent("onmessage", VZFAVORITES.listener);
      }
      */
      VZFAVORITES.proxyIFrame = document.createElement("iframe");
      VZFAVORITES.proxyIFrame.src = VZFAVORITES.proxyURL + "#" + document.location.protocol + "//" + document.location.hostname + ":" + document.location.port;
      VZFAVORITES.proxyIFrame.style.display = 'none';
      document.body.appendChild(VZFAVORITES.proxyIFrame);
    }
  },
  listener: function(event) {

    var resp = eval('(' + event.data + ')');

    if (resp.vzFavoritesProxyMessage != undefined) {
      if (resp.vzFavoritesProxyMessage == "UPDATE") {
        if(resp.favorites !=null){
          VZFAVORITES.favorites = resp.favorites;
          VZFAVORITES.updateTargets();
          VZGLOBALUI.favoritesModal.onSaveSuccess();
        }else{
          VZGLOBALUI.favoritesModal.onSaveFailure();
        }

      }
      if (resp.vzFavoritesProxyMessage == "GET") {
        VZFAVORITES.favorites = resp.favorites;
        VZFAVORITES.updateTargets();
      }
    }
  },
  checkSession: function(){

  if(new Date().getTime() - VZFAVORITES.sessionTime >= 900000) {
    VZFAVORITES.sessionTime = new Date().getTime();
    window.location.reload(true);
  } else {
    VZFAVORITES.sessionTime = new Date().getTime();
  }

}
}
if (typeof VZFAVORITESPREREG === "function") {
  VZFAVORITES.registerTarget(VZFAVORITESPREREG);
  VZFAVORITES.load();
}




/*
 *  Favorites Autosuggest callBack method.
 */
var guiFavoritesAutosuggest = {};
guiFavoritesAutosuggest.parseList = function(list){
  if(list.COUNTER === VZGLOBALUI.favoritesModal.callCounter){
    VZGLOBALUI.favoritesModal.parseAutosuggestList(list);
  }
};



/*
 * Favorites Modal object creation and injection into the DOM.
 */
VZGLOBALUI.favoritesModal = {

  // Initialize the modal overlay wrapper and modal content's.
  'init' : function(){
    VZGLOBALUI.modal.overlay();
    VZGLOBALUI.modal.create(this.createModalContent('edit'), 'modal-edit');
    VZGLOBALUI.modal.create(this.createModalContent('view'), 'modal-view');
  },

  // Temp Object
  'obj' : [
      { "title" : "View Paycheck", "url" : "http://www.google.com" },
      { "title" : "Submit a Timesheet", "url" : "http://www.google.com" },
      { "title" : "401K", "url" : "http://www.google.com" },
      { "title" : "Anthem", "url" : "http://www.google.com" },
      { "title" : "Search Job Openings", "url" : "http://www.google.com" },
      { "title" : "Benefits Connection", "url" : "http://www.google.com" },
      { "title" : "Learning Portal", "url" : "http://www.google.com" },
      { "title" : "VZWeb", "url" : "http://www.google.com" },
      { "title" : "About You", "url" : "http://www.google.com" },
      { "title" : "eDirectory", "url" : "http://www.google.com" }
  ],

  'modifiedObj' : null,

  // Create Edit/View favorites modal content and lists.
  'createModalContent' : function(mode){
    var markup = '<div id="vz-gui-favorites-modal-content">';
    markup += mode == 'edit' ? '<h2 class="vz-gui-brand-red">Manage my favorites</h2>' : '<h2 class="vz-gui-brand-red">My favorites</h2>';
    
    if(mode == 'edit'){
      markup += '<p><label for="vz-gui-input-search-favorites">Enter a keyword and select one of the listed search results to add it to &quot;My favorites&quot;</label></p>'+
      '<div class="vz-gui-favorites-input-wrapper"><input type="text" class="vz-gui-input-search-favorites" id="vz-gui-input-search-favorites" onkeyup="VZGLOBALUI.favoritesModal.updateAutosuggestList();" placeholder="Search keyword to add to my favorites" /><span style="display: none;" title="Clear" class="vz-gui-fav-search-clear" id="vz-gui-fav-search-clear"></span></div>'+
      '<div class="vz-gui-favorites-overlay" id="vz-gui-favorites-overlay" style="display: none;"><div id="vz-gui-favorites-autosuggest-list"></div></div>';
    }

    //this.modifiedObj = this.obj;
    //data = this.modifiedObj;

    /*VZFAVORITES.favoritesModifiedObj = JSON.parse(JSON.stringify(VZFAVORITES.favorites));
    var data =  VZFAVORITES.favoritesModifiedObj;*/

    VZFAVORITES.favoritesModifiedObj = JSON.parse(JSON.stringify(VZFAVORITES.favorites));
    var data =  VZFAVORITES.favoritesModifiedObj;

    if (data != null){

      if(mode == 'edit'){
        markup += '<span id="vz-gui-favorites-link-exists" class="vz-gui-favorites-link-exists"></span>';
        markup += '<ul id="vz-gui-favorites-list-items">';
      }
      else 
        markup += '<ul id="vz-gui-favorites-items-view">';

      for(var i=0; i<data.length; i++){
        markup += '<li>';
        if (mode == 'edit'){
          var titleStr = data[i].title.replace(/'/g, "\\'");
          markup += '<a class="vz-gui-item-link" href="javascript:VZGLOBALUI.favoritesModal.delete(\''+ titleStr +'\', \''+ data[i].url +'\');"><span class="vz-gui-icon-delete"></span></a>';
          markup += '<span>'+ data[i].title + '</span></li>';
        }
        else {
          markup += '<a href="'+ data[i].url +'">'+ data[i].title +'</a></li>';
        }
      }
      markup += '</ul>';
    }
    
    if (mode == 'edit')
        markup += '<button id="vz-gui-input-save-favorites" disabled="disabled" class="vz-gui-btn vz-gui-btn-primary vz-gui-input-save-favorites" onClick="VZGLOBALUI.favoritesModal.save();">Save</button>';
      else 
        markup += '<a class="vz-gui-btn vz-gui-btn-primary" href="javascript:VZGLOBALUI.favoritesModal.getModalContent(\'edit\');">Manage my favorites</a>';
    
    markup += '</div>';
    return markup;
  },

  'getModalContent' : function(mode){
    var markup = this.createModalContent(mode);
    var modalContainerElm = document.querySelector('#vz-gui-modal-wrapper-modal-'+mode+' #vz-gui-modal-container');
    
    // Logic to check user's session timeout goes here

    modalContainerElm.innerHTML = markup;
    VZGLOBALUI.modal.open('modal-'+mode);

    for(var i=0; i < VZFAVORITES.favoritesModifiedObj.length; i++){
      VZFAVORITES.favoritesModifiedObj[i].deleteIdentifier = false;
    }
    var items = document.querySelectorAll('ul#vz-gui-favorites-list-items li a.vz-gui-item-link');
    for(var j=0; j< items.length; j++){
      items[j].onclick = function(){
          if(this.parentNode.className == 'vz-gui-deleted')
            this.parentNode.className = '';
          else
            this.parentNode.className = 'vz-gui-deleted';
      }
    }
  },

  // Favorites Autosuggest List
  'favoritesAutosuggestScriptTag' : null,
  'callCounter' : 0,

  // Parse the autosuggest list and append to the modal content wrapper
  'parseAutosuggestList' : function(list){
    var favoritesAutosuggestList = document.getElementById('vz-gui-favorites-autosuggest-list');
    
    var results = list.S;
    var resultsMarkup = '<ul>';
    for (var i=0; i<results.length; i++){
      var titleStr = results[i].LABEL;
      titleStr = titleStr.replace(/'/g, "\\'");
      if(results[i].URL !== null && results[i].TYPE != 'People')
        resultsMarkup += '<li><a class="vz-gui-favorites-autosuggest-item" href="javascript:VZGLOBALUI.favoritesModal.add(\'' + titleStr + '\', \'' + results[i].URL+ '\');">'+ results[i].LABEL +'</a></li>';
    } 

    resultsMarkup += '</ul>';
    favoritesAutosuggestList.innerHTML = resultsMarkup;

    var items = document.querySelectorAll('.vz-gui-favorites-autosuggest-item');
    for (var i=0; i<items.length; i++){
      items[i].onclick = function(){
        this.style.display = 'none';
        document.getElementById('vz-gui-favorites-overlay').style.display = 'none';
      }
    }
  },

  // Update the autosuggest list as user types into the input and append the results to the DOM.
  'updateAutosuggestList' : function(){
   var favoritesInput = document.getElementById('vz-gui-input-search-favorites');
   var favoritesOverlay = document.getElementById('vz-gui-favorites-overlay');
   var clearElm = document.getElementById('vz-gui-fav-search-clear');
    if (favoritesInput.value.length >= 1) {

      ++this.callCounter;

      // Dynamic search URL??? 
      var searchURL = 'https://vzsearch.ebiz.verizon.com/search/cgi-bin/velocity?v.app=nav-autocomplete-json-ayng&division=wireline&position=guiFavorites&num=25&source=All&str=';

      var url = Extranet.rewriteUrl(searchURL+favoritesInput.value+'&callCounter='+ this.callCounter +'&callback=guiFavoritesAutosuggest.parseList');

      if(this.favoritesAutosuggestScriptTag !== null){
        document.getElementsByTagName('head')[0].removeChild(this.favoritesAutosuggestScriptTag);
        var script1 = document.createElement('script');
        script1.src = url;
        script1.id = 'guiFavoritesAutosuggest';
        document.getElementsByTagName('head')[0].appendChild(script1);
        this.favoritesAutosuggestScriptTag = script1;
      }else{
        var script2 = document.createElement('script');
        script2.src = url;
        script2.id = 'guiFavoritesAutosuggest';
        document.getElementsByTagName('head')[0].appendChild(script2);
        this.favoritesAutosuggestScriptTag = script2;
      }
      favoritesOverlay.style.display = 'block';
      clearElm.style.display = 'block';
    }
    else {
      favoritesOverlay.style.display = 'none';
      clearElm.style.display = 'none';
    }

    clearElm.onclick = function(){
      favoritesOverlay.style.display = 'none';
      this.style.display = 'none';
      favoritesInput.value = '';
    }
  }, 

  // Add a new item to the favorites List
  'add' : function(itemTitle, itemUrl){

    // Add logic to resitrict duplicate
   // this.modifiedObj.unshift({ "title" : itemTitle, "url" : itemUrl });
    var UL = document.getElementById('vz-gui-favorites-list-items');

      // Do not allow duplicates from being added.
    var hasDuplicateItem = false;
    for(var idx=0; idx<VZFAVORITES.favoritesModifiedObj.length; idx++) {
      if( VZFAVORITES.favoritesModifiedObj[idx].title == itemTitle &&
          VZFAVORITES.favoritesModifiedObj[idx].url == itemUrl){
        hasDuplicateItem = true;
        break;
      }
    }
      //if(JSON.stringify(VZFAVORITES.favoritesModifiedObj).indexOf(itemTitle) > -1){
      //if( VZFAVORITES.favoritesModifiedObj[i].title == itemTitle){
        if(hasDuplicateItem){
         var linkExists = document.getElementById('vz-gui-favorites-link-exists');
         linkExists.innerHTML = 'You\'ve already added this to your favorites';
         setTimeout(function(){
          linkExists.innerHTML = '';
         }, 3000);
      }
      else{
        VZFAVORITES.favoritesModifiedObj.unshift({ "title" : itemTitle, "url" : itemUrl, deleteIdentifier : false });
        var LI = document.createElement('LI');
        
        var titleStr = itemTitle.replace(/'/g, "\\'");
        LI.innerHTML = '<a class="vz-gui-item-link" href="javascript:VZGLOBALUI.favoritesModal.delete(\''+ titleStr +'\', \''+ itemUrl +'\');"><span class="vz-gui-icon-delete"></span></a><span class="vz-gui-green">'+ itemTitle + '</span><a href="'+ itemUrl +'" target="_blank"><span class="vz-gui-icon-preview" title="Preview"></span></a>';
        UL.insertBefore(LI, UL.firstChild);
        UL.scrollTop = 0;

        var saveBtn = document.getElementById('vz-gui-input-save-favorites');
        saveBtn.removeAttribute('disabled');
      }

      var items = document.querySelectorAll('ul#vz-gui-favorites-list-items li a.vz-gui-item-link');
      for(var j=0; j< items.length; j++){
        items[j].onclick = function(){
          if(this.parentNode.className == 'vz-gui-deleted')
            this.parentNode.className = '';
          else
            this.parentNode.className = 'vz-gui-deleted';
        }
      }

  },

  // Delete an item from favorites list
  'delete' : function(itemTitle, itemUrl){   
      for(var i=VZFAVORITES.favoritesModifiedObj.length-1; i>=0; i--) {
        if( VZFAVORITES.favoritesModifiedObj[i].title == itemTitle ){
          if(VZFAVORITES.favoritesModifiedObj[i].deleteIdentifier == false)
            VZFAVORITES.favoritesModifiedObj[i].deleteIdentifier = true;
          else
          VZFAVORITES.favoritesModifiedObj[i].deleteIdentifier = false;
        }
      }

    var saveBtn = document.getElementById('vz-gui-input-save-favorites');
    saveBtn.removeAttribute('disabled');

  },

  // Save and send request with the modified favorites.
  'save' : function(){

    //check for session expiry before calling the post

      var finalObj = [];
      for (var k=0; k<VZFAVORITES.favoritesModifiedObj.length; k++){
        if(VZFAVORITES.favoritesModifiedObj[k].deleteIdentifier === false){
          finalObj.push(VZFAVORITES.favoritesModifiedObj[k]);
        }
      }
      var favoritesStringified = JSON.stringify(finalObj)
      var requestSaveMessage = '{ "vzFavoritesProxyMessage" : "POST","favorites" : '+favoritesStringified +'}';
      VZFAVORITES.proxyIFrame.contentWindow.postMessage(requestSaveMessage,VZFAVORITES.proxyURL);

  },
  'onSaveSuccess': function(){

    VZGLOBALUI.favoritesModal.getModalContent('edit');
    VZGLOBALUI.modal.open('modal-edit');
    var btnElm = document.getElementById('vz-gui-input-save-favorites');
    btnElm.innerHTML = 'Saved!';
    setTimeout(function(){
      btnElm.innerHTML = 'Save';
    }, 3000);
  },
  'onSaveFailure': function(){
    var btnElm = document.getElementById('vz-gui-input-save-favorites');
    btnElm.innerHTML = 'Failed!';
    setTimeout(function(){
      btnElm.innerHTML = 'Save';
    }, 6000);
  }

}


/*
 * @function: VZGLOBALUI.modal 
 * @description: Global UI Modal Window DOM element creation and injection into the Body Element.
 */
 
VZGLOBALUI.modal = {

  //@function to construct and inject modal overlay element into the DOM
  'overlay' : function(){
    var overlayElm = document.createElement('DIV');
    overlayElm.id = 'vz-gui-modal-overlay';
    overlayElm.className = 'vz-gui-modal-overlay';
    overlayElm.innerHTML = '';
    overlayElm.style.display = 'none';

    var headerElm = document.getElementById('vz-gui-global-header');
    this.insert(headerElm, overlayElm);
  },

  // Create the modal wrapper DOM element and inject after vz-gui-global-header element
  'create' : function(markup, id){
    var modalWrapperElm = document.createElement('DIV');
    modalWrapperElm.id = 'vz-gui-modal-wrapper-'+id;
    modalWrapperElm.className = 'vz-gui-modal-wrapper';
    modalWrapperElm.style.display = 'none';

    var modalContainerElm = document.createElement('DIV');
    modalContainerElm.className = 'vz-gui-modal-container';
    modalContainerElm.id = 'vz-gui-modal-container';
    modalContainerElm.innerHTML = markup;

    var modalCloseElm = document.createElement('span');
    modalCloseElm.id = 'vz-gui-modal-close-'+id;
    modalCloseElm.className = "vz-gui-modal-close";
    modalWrapperElm.appendChild(modalCloseElm);

    modalWrapperElm.appendChild(modalContainerElm);


    
    modalCloseElm.onclick = function(){
      var modalElms = document.querySelectorAll('.vz-gui-modal-wrapper');
      for(var i=0; i<modalElms.length; i++) {
        modalElms[i].style.display = 'none';
      }
      document.querySelector('.vz-gui-modal-overlay').style.display = 'none';
    }



    var headerElm = document.getElementById('vz-gui-global-header');
    this.insert(headerElm, modalWrapperElm);
    return false;
  },

  // @function to insert a element after a specific referenced Node element.
  'insert' : function (referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  },

  // @function to open/toggle modal window
  'open' : function(id){
    var modalContainers = document.querySelectorAll('.vz-gui-modal-wrapper');
    for (var i=0; i<modalContainers.length; i++){
      modalContainers[i].style.display = 'none';
    }
    document.getElementById('vz-gui-modal-wrapper-'+id).style.display = 'block';
    document.getElementById('vz-gui-modal-overlay').style.display = 'block';
    window.scrollTo(0, 0);
  },

  'close' : function(){
    // Close modal and overlay on click of close
    
  }
}

VZGLOBALUI.initializeWindowMessageEventListener = function() {
    if (window.addEventListener) {
        addEventListener("message", VZGLOBALUI.genericWindowMessageEventHandler, false);
    } else {
        attachEvent("onmessage", VZGLOBALUI.genericWindowMessageEventHandler);
    }
}

VZGLOBALUI.genericWindowMessageEventHandler = function(event){

    var eventOrigin = event.origin;
    var fromWhichIframe = VZGLOBALUI.checkFromWhichOrigin(eventOrigin);
    if(fromWhichIframe == 'FAVORITES'){
        VZFAVORITES.listener(event);
    }else if(fromWhichIframe == 'SMARTSEARCH'){
      VZGLOBALUI.smartSearchIframe.messageListener(event);
    }

}

VZGLOBALUI.checkFromWhichOrigin = function(eventOrigin){

    if(eventOrigin == "http://localhost:8585" || eventOrigin == "https://globalui.ebiz.verizon.com" || eventOrigin == "https://globalui.verizon.com" ){
        return "FAVORITES";
    }else if (eventOrigin == "http://localhost:8585" || eventOrigin == "https://vzsearch2.ebiz.verizon.com" || eventOrigin == "https://vzsearch2.verizon.com"
        || eventOrigin == "http://w16sacovn08.ebiz.verizon.com:83" || eventOrigin == "https://w16sacovn08.ebiz.verizon.com:83" ){
        return "SMARTSEARCH";
    } else {
        return "INVALID";
    }

}


/*
 * Methods Initialization
 */

VZGLOBALUI.modifyHeaders(); // modify html meta information
VZGLOBALUI.injectHeader(); // inject Global header wraper
VZGLOBALUI.constructHeaderMobile();
VZGLOBALUI.initializeWindowMessageEventListener(); // initialize window message event listener
VZGLOBALUI.injectProfile(); // inject User profile
var thisGlobalMenu = VZGLOBALUI.contructGlobalMenu();
VZGLOBALUI.injectGlobalMenuWrapper(); // inject Global dropdown menu
VZGLOBALUI.injectSearch(); // inject header search
thisGlobalMenu.buildMenu(); // contruct the menu from the menu JSON object
VZGLOBALUI.injectDummyMenuWrapper();

/*
setTimeout(function () {
    VZGLOBALUI.displayUserProfile();
}, 300);
*/


// Favorites Modal Init
VZGLOBALUI.favoritesModal.init();

//VZGLOBALUI.modal.overlay();
//VZGLOBALUI.modal.create('<h1>Modal 1</h1>', 'modal-edit');
//VZGLOBALUI.modal.create('<h1>Modal 2</h1> <span style=""><a href="javascript:VZGLOBALUI.modal.open(\'modal-edit\');">Edit Modal</a></span>', 'modal-view');

var isGlobaluiStylesLoaded = false;
var cssforUserProfileIndicator = document.querySelector('header.vz-gui-global-header .vz-gui-dummy-div');
if(cssforUserProfileIndicator !=null){
    var theCSSprop = window.getComputedStyle(cssforUserProfileIndicator,null).getPropertyValue("float");
    if( theCSSprop === 'right'){
        VZGLOBALUI.displayUserProfile();
        isGlobaluiStylesLoaded = true;
    }
}

if(!isGlobaluiStylesLoaded){
    setTimeout(function () {
        VZGLOBALUI.displayUserProfile();
    }, 300);
}

VZGLOBALUI.toggleElements(); // trigger function for toggle UI elements
if (!VZGLOBALUI.pilot)  // Pilot search A/B Testing
  VZGLOBALUI.initializeAutoCompleteObj(); // search autocomplete
else{ // Pilot search A/B Testing
  VZGLOBALUI.smartSearchIframe.inject();
  VZGLOBALUI.smartSearchIframe.query();
} // Pilot search A/B Testing
