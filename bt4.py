#!/usr/bin/env python
# coding: utf-8

# In[3]:


def kiem_tra_so_nguyen_to(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

def nextPrime(n):
    prime = n + 1
    while not kiem_tra_so_nguyen_to(prime):
        prime += 1
    return prime

# Chương trình chính
def main():
    n = int(input("Nhap 1 so: "))
    ket_qua = nextPrime(n)
    print(f"So nguyen to lon hon {n} la: {ket_qua}")

if __name__ == "__main__":
    main()


# In[ ]:




