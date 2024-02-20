from sys import *
import re
exp=argv[1]
exp=exp.replace('{','(')
exp=exp.replace('[','(')
exp=exp.replace(']',')')
exp=exp.replace('}',')')
modified_string = re.sub(r'(\d+)\(', r'\1*(', exp)
# print(modified_string)
print(eval(modified_string))
