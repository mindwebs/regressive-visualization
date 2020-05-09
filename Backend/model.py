import numpy as np 

def calc(X, y, x_sup):   
    m = len(X) 
    w = [0,-1]
    w = descent(w,w,.1, X, y)
    y_req = w[1]*x_sup + w[0]
    return y_req

def h(X,w):
    return (w[1]*np.array(X[:,0])+w[0])
def cost(w,X,y):
    return (.5/m) * np.sum(np.square(h(X,w)-np.array(y)))
def grad(w,X,y):
    g = [0]*2
    g[0] = (1/m) * np.sum(h(X,w)-np.array(y))
    g[1] = (1/m) * np.sum((h(X,w)-np.array(y))*np.array(X[:,0]))
    return g
def descent(w_new, w_prev, lr, X, y):
    j=0
    while True:
        w_prev = w_new
        w0 = w_prev[0] - lr*grad(w_prev,X,y)[0]
        w1 = w_prev[1] - lr*grad(w_prev,X,y)[1]
        w_new = [w0, w1]
        if (w_new[0]-w_prev[0])**2 + (w_new[1]-w_prev[1])**2 <= pow(10,-6):
            return w_new
        if j>500: 
            return w_new
        j+=1


