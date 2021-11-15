from django.http import JsonResponse
import joblib
import json
import pandas as pd

rfModel = joblib.load("predictor.pkl")

def scoreJson(request):
     
     data=json.loads(request.body)
     data["MESSAGE_A"]=[1]
     dataF=pd.DataFrame.from_dict(data)
     score1=rfModel.predict_proba(dataF)[:,-1][0]
     Treatment=float(score1)
     print(data)
     print("Treatment",Treatment)

     data["MESSAGE_A"]=[0]
     dataF=pd.DataFrame.from_dict(data)
     score2=rfModel.predict_proba(dataF)[:,-1][0]
     Control=float(score2)
     print(data)
     print("Control",Control)

     result = (Treatment-Control)

     print("Result",result)

     return JsonResponse({'score':result})
