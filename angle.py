import math
from sys import argv
exp=argv[1]
result=""
if len(exp) == 4:
    angle = int(exp[3])
    trig_function = exp[0:3]
elif "cosec" in exp :
    trig_function = exp[:5]
    if len(exp)==6:
        angle=int(exp[5])
    else:
        angle = int(exp[5:])
elif len(exp)==5:
    angle=int(exp[3:])
    trig_function = exp[:3]
elif len(exp) > 5:
    angle = int(exp[3:])
    trig_function=exp[:3]
deg = math.radians(angle)
if trig_function == 'sin':
    result = math.sin(deg)
elif trig_function == 'cos':
    result = math.cos(deg)
elif trig_function == 'tan':
    result = math.tan(deg)
elif trig_function == 'cot':
    result = 1/math.tan(deg)
elif trig_function == 'sec':
    result = 1/math.cos(deg)
elif trig_function == 'cosec':
    result=1/math.sin(deg)
print(result)
        
    

