# Como funciona:
# O código utiliza da ferramenta 'PyOpenGL' e precisa de suas bibliotecas instaladas para execução.
# Assim que aberto o código, execute normalmente.
# Assim que executado, é possível mover o paraboloide com as teclas direcionais do teclado para variações na sua visualização, seguindo o referencial inicial.
# TECLAS: DIREITA -> Sentido horário/ ESQUERDA -> Sentido antihorário/ CIMA -> Gira para frente/ BAIXO -> Gira para trás
from OpenGL.GLUT import *
from OpenGL.GLU import *
from OpenGL.GL import *
from math import *
#FUNCAO
def f(x,y):
    return -x**2 - y**2
M, N = 100, 100
x0, y0 = -2, -2
xf, yf = 2, 2
dx, dy = (xf - x0)/M, (yf - y0)/N
ax, ay, az = 0, 0, 0
#LOOP
def paraboloide():
    glPushMatrix()
    glTranslate(0.0,0.0,az)
    glRotatef(ax,1.0,0.0,0.0)
    glRotatef(ay,0.0,1.0,0.0)
    for i in range(0, N):
        y = y0 + i*dy      
        glColor3f(1-(i/N), i/N, 255)
        glBegin(GL_QUAD_STRIP)
        for j in range(0,M):
            x = x0 + j*dx
            glVertex3f(x, y, f(x,y))
            glVertex3f(x, y+dy, f(x, y+dy))            
        glEnd()
    glPopMatrix()
#DESENHA
def desenha():
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)
    paraboloide()
    glutSwapBuffers()
#KEY PRESSED
def keyPressed(tecla, x, y):
    global az
    if tecla == b'\033':
        glutLeaveMainLoop()
    elif tecla == b'+':
        az += 5
    elif tecla == b'-':
        az -= 5
    glutPostRedisplay()
#SPECIAL KEY PRESSED
def specialKeyPressed(tecla, x, y):
    global ax, ay
    if tecla == GLUT_KEY_UP:
        ax -= 5                 
    elif tecla == GLUT_KEY_DOWN:
        ax += 5
    elif tecla == GLUT_KEY_RIGHT:
        ay += 5
    elif tecla == GLUT_KEY_LEFT:
        ay -= 5        
    glutPostRedisplay()
# PROGRAMA PRINCIPAL
glutInit(sys.argv)
glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGBA | GLUT_DEPTH | GLUT_MULTISAMPLE)
glutInitWindowSize(600,600)
glutCreateWindow("Paraboloide Equacao Implicita")
glutDisplayFunc(desenha) 
glutKeyboardFunc(keyPressed)
glutSpecialFunc(specialKeyPressed)
glEnable(GL_MULTISAMPLE)
glEnable(GL_DEPTH_TEST)
glClearColor(0.2,0,0.2,0)
gluPerspective(50,800.0/600.0,0.1,100.0)
glTranslatef(0.0,0.0,-20)
glutMainLoop()