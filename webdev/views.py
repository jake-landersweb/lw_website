from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

from . import funcs, mail

# Create your views here.


def index(request):
    if request.method == "POST":
        # validate form data
        name = request.POST.get("name")
        email = request.POST.get("email")
        body = request.POST.get("body")

        valid = funcs.contact_valid({"name": name, "email": email, "body": body})

        if valid == "success":
            print("valid")
            # send mail
            # response = mail.send_mail(
            #     ["jake@landersweb.com", "kevin@landersweb.com"],
            #     "Website Work Request",
            #     "{}\n\n- {}\n({})".format(body, name, email),
            # )
            response = True
            if response:
                print("successfully sent message")
                return HttpResponseRedirect(reverse("index"))
        else:
            error = valid
    else:
        name = ""
        email = ""
        body = ""
        error = ""
    return render(
        request,
        "index.html",
        {"name": name, "email": email, "body": body, "error": error},
    )
