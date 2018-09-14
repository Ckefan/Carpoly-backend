for x in range(1, 10):
    for y in range(1, x+1):
        print("{y}*{x}={xy}".format(y=y, x=x, xy=x * y), end="\t")
    print()