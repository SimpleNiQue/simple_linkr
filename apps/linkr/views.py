import random 

from django.shortcuts import render

temporary_database = {}


def home(request):
    all_urls = {}
    
    if request.method == 'POST':
        # REMINDER: add logic to check that a specified URL is valid later
        original_url = request.POST['original_url']
        custom_end = request.POST['custom_end']
        link_title = request.POST['link_title']
        

        # call the shorten_url function
        shortened_url = shorten_url(custom_end)
        
        # create a new shortened URL object and save to the temporary database
        
        all_urls.update({
            'shortened_url': shortened_url,
            'original_url': original_url,
            'title': link_title,
        }
        )
        
        temporary_database.update(all_urls)
        
        
    return render(request, 'linkr/home.html', all_urls)


def shorten_url( custom_end: str= '') -> str:
    """Creates and returns a custom shortened URL
    
        :param custom_end: A custom end to identify the URL (optional).
    """
    # If the user does not provide a custom backend, a new one should
    # be generated
    ALPHABET: str = """ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"""
    
    database_keys = tuple(temporary_database.keys())
    shortened_url = ''
    LINK_PREFIX = "localhost:5000/linkr/"
      
    if (not custom_end) or custom_end == '':
        # if a custom end is not provided, generate one that is
        # not in the database
        
        custom_end = ''.join(
            [''.join(random.choice(ALPHABET)) for _ in range(5)]
        )
        
        _shortened_url = LINK_PREFIX+custom_end
        
        if _shortened_url not in database_keys:
            shortened_url = _shortened_url
    else:
        # if a custom backend is provided that is not an empty
        # string, use it instead
        shortened_url = LINK_PREFIX + custom_end
        
    return shortened_url
