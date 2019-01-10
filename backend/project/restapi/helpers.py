# Project helpers

def days_till_bday(date):
    from datetime import datetime
    curr_time = datetime.date(datetime.now())
    curr_year = curr_time.year
    date = date.replace(year=curr_year)
    if (date - curr_time).days < 0:
        date = date.replace(year=curr_year + 1)
    return (date - curr_time).days
