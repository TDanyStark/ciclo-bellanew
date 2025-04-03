import MenstrualCharacteristics from "@/components/Phases/MenstrualCharacteristics";
import MenstrualSymptoms from "@/components/Phases/MenstrualSymptoms";
import MenstrualFood from "@/components/Phases/MenstrualFood";
import MenstrualAdvice from "@/components/Phases/MenstrualAdvice";
import MenstrualInfo from "@/components/Phases/MenstrualInfo";

import FollicularCharacteristics from "@/components/Phases/FollicularCharacteristics";
import FollicularSymptoms from "@/components/Phases/FollicularSymptoms";
import FollicularFood from "@/components/Phases/FollicularFood";
import FollicularAdvice from "@/components/Phases/FollicularAdvice";
import FollicularInfo from "@/components/Phases/FollicularInfo";

import OvulatoryCharacteristics from "@/components/Phases/OvulatoryCharacteristics";
import OvulatorySymptoms from "@/components/Phases/OvulatorySymptoms";
import OvulatoryFood from "@/components/Phases/OvulatoryFood";
import OvulatoryAdvice from "@/components/Phases/OvulatoryAdvice";
import OvulatoryInfo from "@/components/Phases/OvulatoryInfo";

import LutealCharacteristics from "@/components/Phases/LutealCharacteristics";
import LutealSymptoms from "@/components/Phases/LutealSymptoms";
import LutealFood from "@/components/Phases/LutealFood";
import LutealAdvice from "@/components/Phases/LutealAdvice";
import LutealInfo from "@/components/Phases/LutealInfo";

const componentMap = {
    Menstrual: {
        characteristics: MenstrualCharacteristics,
        symptoms: MenstrualSymptoms,
        food: MenstrualFood,
        advice: MenstrualAdvice,
        info: MenstrualInfo,
    },
    Follicular: {
        characteristics: FollicularCharacteristics,
        symptoms: FollicularSymptoms,
        food: FollicularFood,
        advice: FollicularAdvice,
        info: FollicularInfo,
    },
    Ovulatory: {
        characteristics: OvulatoryCharacteristics,
        symptoms: OvulatorySymptoms,
        food: OvulatoryFood,
        advice: OvulatoryAdvice,
        info: OvulatoryInfo,
    },
    Luteal: {
        characteristics: LutealCharacteristics,
        symptoms: LutealSymptoms,
        food: LutealFood,
        advice: LutealAdvice,
        info: LutealInfo,
    }
};

export default componentMap;
