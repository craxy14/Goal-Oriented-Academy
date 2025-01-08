#შექმენით ფუნქცია რომელსაც გადაეცემა სამკუთხედის სამი გვერდი, და დაპრინტავს მის პერიმეტრს
 
# gverdi1 = int(input("gverdi 1 : "))
# gverdi2 = int(input("gverdi 2 : "))
# gverdi3 = int(input("gverdi 3 : "))

# def samkutxedi(gverdi1 , gverdi2 , gverdi3):
#     print("samkutxedis perimetria :" , gverdi1 + gverdi2 + gverdi3)

# samkutxedi(gverdi1 , gverdi2 , gverdi3)    


side1 = int(input("side 1 : "))
side2 = int(input("side 2 : "))
side3 = int(input("side 3 : "))

def triangle(any_side1 , any_side2 , any_side3):
    print("perimeter of a triangle = " , any_side1 + any_side2 + any_side3)

triangle(side1 , side2 , side3)





#შექმენით ფუნქცია, რომელსაც გადაეცემა კვადრატის გვერდი და დაპრინტავს მის ფართობს და პერიმეტრს.

side = int(input("Enter the side of a square : "))

def calc_p_square(any_side):                                    #კვადრატის პერიმეტრი
    print("Perimeter of a square :" ,any_side * 4)

calc_p_square(side)


length = int(input("Enter the length of the rectangle : "))
width = int(input("Enter the width of the rectangle : "))

def calc_rect_area(any_width , any_length ):
    print("Area of ​the rectangle :" , any_length * any_width)

calc_rect_area(length , width)



# def misalmeba(nebismieri_saxeli):
#     print(nebismieri_saxeli , "gamarjoba")

# misalmeba("nika")
# misalmeba("vano")