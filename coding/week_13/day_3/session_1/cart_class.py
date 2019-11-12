class ShoppingCart :
  
    def add_item(self,product,price) :
        if product in items_present_in_cart :
            print(product + " Already present")
        else :
            items_present_in_cart[product] = price
            print(product + "Added")
    def remove_item(self,product) :
        if product in items_present_in_cart :
            del items_present_in_cart[product]
            print(product + " removed from cart")
        else:
            print(product + " not present in cart")
items_present_in_cart = {}
item= ShoppingCart()
item.add_item("Chicken", "200")
print("Item after added: " + str(items_present_in_cart))
item.remove_item("Chicken")
print("Item after removed "  + str(items_present_in_cart))

        



  

