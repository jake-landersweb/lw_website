def contact_valid(form):
    if form.get("name") is None or form.get("name") == "":
        return "Name is a required field."
    elif form.get("email") is None or form.get("email") == "":
        return "Email is a required field."
    elif form.get("body") is None or form.get("body") == "":
        return "Body is a required field."
    else:
        # email validation
        if not "@" in form["email"]:
            return "Please enter a valid email."
        elif not "." in form["email"]:
            return "Please enter a valid email."
        else:
            return "success"
