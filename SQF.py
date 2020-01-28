class Categorie:
    def __init__(self, name, total_keys, limit):
        self.name = name
        self.total_keys = int(total_keys)
        self.limit = int(limit)
        self.keys = []
    
    def belengosTo(self, text):
        counter = 0
        words = text.split()
        for key in self.keys:
            counter += words.count(key)
        if(counter >= self.limit):
            return True
        else: 
            return False
            
def main():
    test_case = input()
    categories = []
    for case_index in xrange(0, test_case):
        categories_number = input()
        for cat_index in xrange(0, categories_number):
            categorie_data = raw_input().split()
            categorie_instance = Categorie(*categorie_data)
            for key in xrange(0, categorie_instance.total_keys):
                categorie_instance.keys.append(raw_input())
            categories.append(categorie_instance)
    
    text = ''
    
    text = '\n'.join(iter(raw_input, text))

    belongs_to = ""
    for categorie in categories:
        if(categorie.belengosTo(text)):
            belongs_to += categorie.name + " "
    
    if(belongs_to == ""):
        print("SQF Problem")
    else:
        print(belongs_to.strip())
        
if __name__ == "__main__":
    main()