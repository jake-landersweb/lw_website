from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

from . import funcs, mail

# Create your views here.


def index(
    request,
):
    if request.method == "POST":
        print("post")
        # validate form data
        fname = request.POST.get("fname")
        lname = request.POST.get("lname")
        email = request.POST.get("email")
        body = request.POST.get("body")

        valid = funcs.contact_valid({"fname": fname, "email": email, "body": body})

        if valid == "success":
            print("valid")
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
                return HttpResponseRedirect(reverse("index"))
        else:
            error = valid
    else:
        print("get")
        fname = ""
        lname = ""
        email = ""
        body = ""
        error = ""
    return render(
        request,
        "index.html",
        {
            "fname": fname,
            "lname": lname,
            "email": email,
            "body": body,
            "error": error,
        },
    )
