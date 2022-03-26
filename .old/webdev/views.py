from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

from . import funcs, mail

# Create your views here.


def index(request,):
    if request.method == "POST":
        print("post")
        # validate form data
        fname = request.POST.get("fname")
        lname = request.POST.get("lname")
        email = request.POST.get("email")
        body = request.POST.get("body")

        valid = funcs.contact_valid({"fname": fname, "email": email, "body": body})

        if valid == "success":
            # send mail
            response = mail.send_mail(
                ["jake@landersweb.com", "kevin@landersweb.com"],
                "Website Work Request",
                "{}\n\n- {} {}\n({})".format(
                    body, fname, lname if lname is not None else "", email
                ),
            )
            # response = True
            if response:
                print("successfully sent message")
                request.method = "GET"
                return render(
                    request,
                    "index.html",
                    {
                        "fname": "",
                        "lname": "",
                        "email": "",
                        "body": "",
                        "success": "Successfully sent your message.",
                        "anchor": "Contact",
                    },
                )
        else:
            error = valid
            anchor = "Contact"
    else:
        fname = ""
        lname = ""
        email = ""
        body = ""
        error = ""
        anchor = ""
    return render(
        request,
        "index.html",
        {
            "fname": fname,
            "lname": lname,
            "email": email,
            "body": body,
            "error": error,
            "anchor": anchor,
        },
    )
