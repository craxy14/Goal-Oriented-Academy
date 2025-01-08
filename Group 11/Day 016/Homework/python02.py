#შედით თქვენს გითჰაბზე, გაკვეთილი 0-ის დავალება გახსენით და ყველაფერი გააკეთეთ ფუნქციებით მაქსიმალურად.

from turtle import *
speed(100)

def kubi():                           
    for i in range(4):         #walls
        forward(200)
        left(90)

kubi()


def door():
    forward(60)
    left(90)
    for i in range(3):        #door
        forward(80)
        right(90)

door()

penup()
goto(200 , 200)
pendown()

right(60)
forward(200)                #roof
left(120)                   
forward(200)


penup()
left(30)
forward(30)         
left(90)
pendown()

def window():
    for i in range(4):      #window
        forward(60)
        right(90)

window()
       
penup()
forward(200)
left(180)
pendown()

def window1():
    for i in range(4):     #window1
        forward(60)
        left(90)

window1()




























exitonclick()       