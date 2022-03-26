import React from "react"
import ImageWrapper from "../../components/misc/image"
import CrosscheckItem from "../../components/products/crosscheck"
import TechItem from "../../components/technologies/tech_item"
import TechWrapper from "../../components/technologies/tech_wrapper"
import { IoStatsChart, IoPeople, IoChatboxOutline, IoSettingsOutline, IoPhonePortraitOutline, IoTvOutline } from 'react-icons/io5';
import SumItem from "../../components/crosscheck/sum_item"
import { BiShoppingBag } from 'react-icons/bi'
import Field from "../../components/misc/field"
import { useState } from "react"
import Form from "../../components/misc/form"

const Crosscheck = () => {


    return <>
        <TechWrapper props={{
            content: <>
                <div className="space-y-16">
                    <div className="flex items-center space-x-2 md:space-x-4">
                        <ImageWrapper props={{
                            url: "/svg/xcheck_blue.svg",
                            alt: "Crosscheck Logo",
                            className: "xs:max-h-[100px] xs:max-w-[100px] max-h-[75px] max-w-[75px]"
                        }} />
                        <h1 className="text-2xl xs:text-4xl font-bold">
                            Crosscheck Sports
                        </h1>
                    </div>
                    <CrosscheckItem />
                    <h3 className="text-xl font-medium">
                        Crosscheck Sports is all about managing your team easily and effectively. This gives you a tool to manage your sports team, create seasons, events, games and practices while managing the attendance you will have at these events. Crosscheck Sports is focused on giving a world class roster management experience to team owners and managers, while also delivering a seamless and fluid UI for your team members to interact with. With an integrated chat and stat tracking system, take your team to the next level with Crosscheck Sports.
                    </h3>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">
                            Main Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
                            <SumItem props={{
                                title: "Attendance Tracking",
                                image: <>
                                    <IoPeople size="50px" />
                                </>,
                                className: "bg-xc text-xc",
                                hasColors: true,
                                description: "GOING, NOT GOING, or UNDECIDED, along with a note and custom defined fields, get all the information you need on a user's check in."
                            }} />
                            <SumItem props={{
                                title: "Stats",
                                image: <>
                                    <IoStatsChart size="50px" />
                                </>,
                                className: "bg-xc text-xc",
                                hasColors: true,
                                description: "Goals, assists, and penalty minutes to everything in between, keep track of the stats important to your team from season to season."
                            }} />
                            <SumItem props={{
                                title: "Chat",
                                image: <>
                                    <IoChatboxOutline size="50px" />
                                </>,
                                className: "bg-xc text-xc",
                                hasColors: true,
                                description: "With different chat rooms on each season, keep in touch with your team in a centralized location connected to the schedule."
                            }} />
                            <SumItem props={{
                                title: "Powerful Customization",
                                image: <>
                                    <IoSettingsOutline size="50px" />
                                </>,
                                className: "bg-xc text-xc",
                                hasColors: true,
                                description: "The powerful custom field engine allows you to add any functionality to the app you see missing. This in addition to icon, color, and brightness."
                            }} />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">
                            Why?
                        </h2>
                        <h3 className="text-xl font-medium">
                            Why did we build Crosscheck Sports? It was born out of a need. With experience running adult league hockey teams and trying to figure out who wants to play in what season, and who is substituting on certain games, or even trying to find a goalie for a late night game, it became very clear that a robust roster management system needed to exist for teams to lean on. So while developing this sports team roster management system, all of the stored data about the team could be used to present a polished product to an end user. So, with two main features for users in checking into events and a chat system, this tool gives team owners the ability to manage their complex roster cases in an easy to use format while also giving their users access to a hub for all of the information about the team and season they are a part of to live. We hope you enjoy using this app as much as we enjoyed making it.
                        </h3>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">
                            What We Can Do For You
                        </h2>
                        <h3 className="text-xl font-medium">
                            Do you find yourself wishing you had a website to send people to learn more about your sports team? Do you want a custom built team app on the app store for your players to download? Let us set up a truly custom first class team experience with features like:
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
                            <SumItem props={{
                                title: "E-Commerce",
                                image: <>
                                    <BiShoppingBag size="50px" />
                                </>,
                                className: "bg-xc text-xc",
                                hasColors: true,
                                description: "Set up an online shop to show off your team's awesome logo, we handle the headache!"
                            }} />
                            <SumItem props={{
                                title: "Website",
                                image: <>
                                    <IoTvOutline size="50px" />
                                </>,
                                className: "bg-xc text-xc",
                                hasColors: true,
                                description: "Show your fans a customized dashboard on your site, along with access to the Crosscheck Sports engine."
                            }} />
                            <SumItem props={{
                                title: "Mobile App",
                                image: <>
                                    <IoPhonePortraitOutline size="50px" />
                                </>,
                                className: "bg-xc text-xc",
                                hasColors: true,
                                description: "Truly take your team to the next level with a complete custom app for your players and fans to download."
                            }} />

                        </div>
                    </div>
                    <Form props={{
                        title: "Ready to Take Your Team to the Next Level?"
                    }} />
                </div>
            </>
        }} />
    </>
}

export default Crosscheck