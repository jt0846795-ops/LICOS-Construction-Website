import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/",
          filePath: "content/pages/home.json",
          fields: [
  {
    "name": "heroTitle",
    "type": "string"
  },
  {
    "name": "heroSubtitle",
    "type": "string"
  },
  {
    "name": "aboutTitle",
    "type": "string"
  },
  {
    "name": "aboutText",
    "type": "string"
  },
  {
    "name": "commitmentText",
    "type": "string"
  },
  {
    "name": "goalText",
    "type": "string"
  },
  {
    "name": "servicesTitle",
    "type": "string"
  },
  {
    "name": "servicesIntro",
    "type": "string"
  },
  {
    "name": "kitchenTitle",
    "type": "string"
  },
  {
    "name": "kitchenText",
    "type": "string"
  },
  {
    "name": "bathroomTitle",
    "type": "string"
  },
  {
    "name": "bathroomText",
    "type": "string"
  },
  {
    "name": "homeRenovationsTitle",
    "type": "string"
  },
  {
    "name": "homeRenovationsText",
    "type": "string"
  },
  {
    "name": "customHomesTitle",
    "type": "string"
  },
  {
    "name": "customHomesText",
    "type": "string"
  },
  {
    "name": "newHomesTitle",
    "type": "string"
  },
  {
    "name": "newHomesText",
    "type": "string"
  },
  {
    "name": "finishCarpentryTitle",
    "type": "string"
  },
  {
    "name": "finishCarpentryText",
    "type": "string"
  },
  {
    "name": "cabinetsTitle",
    "type": "string"
  },
  {
    "name": "cabinetsText",
    "type": "string"
  },
  {
    "name": "pantriesTitle",
    "type": "string"
  },
  {
    "name": "pantriesText",
    "type": "string"
  },
  {
    "name": "barsTitle",
    "type": "string"
  },
  {
    "name": "barsText",
    "type": "string"
  },
  {
    "name": "interiorRemodelingTitle",
    "type": "string"
  },
  {
    "name": "interiorRemodelingText",
    "type": "string"
  },
  {
    "name": "processTitle",
    "type": "string"
  },
  {
    "name": "processIntro",
    "type": "string"
  },
  {
    "name": "process1Title",
    "type": "string"
  },
  {
    "name": "process1Text",
    "type": "string"
  },
  {
    "name": "process2Title",
    "type": "string"
  },
  {
    "name": "process2Text",
    "type": "string"
  },
  {
    "name": "process3Title",
    "type": "string"
  },
  {
    "name": "process3Text",
    "type": "string"
  },
  {
    "name": "process4Title",
    "type": "string"
  },
  {
    "name": "process4Text",
    "type": "string"
  },
  {
    "name": "process5Title",
    "type": "string"
  },
  {
    "name": "process5Text",
    "type": "string"
  },
  {
    "name": "workTitle",
    "type": "string"
  },
  {
    "name": "workIntro",
    "type": "string"
  },
  {
    "name": "beforeAfterTitle",
    "type": "string"
  },
  {
    "name": "beforeAfterIntro",
    "type": "string"
  },
  {
    "name": "beforeLabel",
    "type": "string"
  },
  {
    "name": "beforeCaption",
    "type": "string"
  },
  {
    "name": "afterLabel",
    "type": "string"
  },
  {
    "name": "afterCaption",
    "type": "string"
  },
  {
    "name": "valuesTitle",
    "type": "string"
  },
  {
    "name": "value1Title",
    "type": "string"
  },
  {
    "name": "value1Text",
    "type": "string"
  },
  {
    "name": "value2Title",
    "type": "string"
  },
  {
    "name": "value2Text",
    "type": "string"
  },
  {
    "name": "value3Title",
    "type": "string"
  },
  {
    "name": "value3Text",
    "type": "string"
  },
  {
    "name": "value4Title",
    "type": "string"
  },
  {
    "name": "value4Text",
    "type": "string"
  },
  {
    "name": "missionVisionTitle",
    "type": "string"
  },
  {
    "name": "missionText1",
    "type": "string"
  },
  {
    "name": "missionText2",
    "type": "string"
  },
  {
    "name": "missionText3",
    "type": "string"
  },
  {
    "name": "missionText4",
    "type": "string"
  },
  {
    "name": "visionText1",
    "type": "string"
  },
  {
    "name": "visionText2",
    "type": "string"
  },
  {
    "name": "visionText3",
    "type": "string"
  },
  {
    "name": "visionText4",
    "type": "string"
  },
  {
    "name": "testimonialsTitle",
    "type": "string"
  },
  {
    "name": "testimonial1",
    "type": "string"
  },
  {
    "name": "testimonial2",
    "type": "string"
  },
  {
    "name": "testimonial3",
    "type": "string"
  },
  {
    "name": "socialTitle",
    "type": "string"
  },
  {
    "name": "socialText",
    "type": "string"
  },
  {
    "name": "estimateTitle",
    "type": "string"
  },
  {
    "name": "estimateIntro",
    "type": "string"
  },
  {
    "name": "phone",
    "type": "string"
  },
  {
    "name": "email",
    "type": "string"
  },
  {
    "name": "serviceArea",
    "type": "string"
  }
]
        }
      ]
    })
  ]
});
