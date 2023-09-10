#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Sep  9 19:08:15 2023

@author: tingtingli
"""

import numpy as np
from matplotlib import pyplot as plt
from scipy.interpolate import CubicSpline

from fastapi import FastAPI
from pydantic import BaseModel


class insulinCostCalculator(BaseModel):
    glucoseLevel: float
    breakfastGlucose: float
    lunchGlucose: float
    dinnerGlucose: float
    normBG: float
    BGCorrection: float
    insulinB: float
    insulinD: float
    insulinL: float
    LongActing: float
    LongActingDay: float
    bloodSugarL: float
    bloodSugarB: float
    bloodSugarD: float
    days: float

   #add rest of shit here


app = FastAPI()


@app.post("/calculator/")
async def create_item(bruh: insulinCostCalculator):
#BG Values
# bloodSugarB = input("What was your blood sugar at breakfast?")
# bloodSugarL = input("What was your blood sugar at lunch?")
# bloodSugarD = input("What was your blood sugar at dinner?")

# #Correction
# normBG = input("What is your standard BG value?")
# BGCorrection = input("What is your blood sugar correction value? 1 unit of insulin correction per _____ mg/dL over standard blood sugar value (Fill in the blank)")

# #Insulin
# insulinB = input("What was your breakfast short acting insulin intake? Enter in units")
# insulinL = input("What was your lunch short acting insulin intake? Enter in units")
# insulinD = input("What was your dinner short acting insulin intake? Enter in units")

# #LongActing
# LongActing = input("What is your hourly Long Acting Insulin intake?")
# LongActingDay = float(LongActing)*24

#Calculations

#BG
    bgB = ((float(bruh.breakfastGlucose) - float(bruh.normBG))/float(bruh.BGCorrection))
    bgL = ((float(bruh.bloodSugarL) - float(bruh.normBG))/float(bruh.BGCorrection))
    bgD = ((float(bruh.bloodSugarD) - float(bruh.normBG))/float(bruh.BGCorrection))

    if bgB < 0:
        bgB = 0

    if bgL < 0:
        bgL = 0
        
    if bgD < 0:
        bgD = 0

    totCorrection = float(((float(bruh.bloodSugarB) - float(bruh.normBG)) + (float(bruh.bloodSugarL) - float(bruh.normBG)) + (float(bruh.bloodSugarD) - float(bruh.normBG))/float(bruh.BGCorrection)))

    #Tot. Insulin
    totInsulin = float(bruh.insulinB) + float(bruh.insulinL) + float(bruh.insulinD) + float(totCorrection)

    #prices
    dailyPrice = (598/15000) * totInsulin 

    #month Calculator
    #days = input("How many days are in the month you'd like to solve for?")
    monthlyPrice = (dailyPrice * float(bruh.days))

    #output
    print("Base on your insulin intake for today, " + str(totInsulin) + " your average daily insulin spending is: " + str(dailyPrice) + " and your monthly insulin spending is: " + str(monthlyPrice) + " for this month.")

    return {"totInsulin" : float(totInsulin), "dailyPrice" : float(dailyPrice), "monthlyPrice" : float(monthlyPrice)}

