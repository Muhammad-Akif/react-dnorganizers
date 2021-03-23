import TypeWriterEffect from 'react-typewriter-effect';
import React from 'react'
export default function TextAnimation() {
    return (
        <div>
            <TypeWriterEffect
                textStyle={{
                    fontFamily: 'Red Hat Display',
                    color: '#fff',
                    fontSize: '1.5em',
                    width: '90vw',
                    textAlign: 'center'
                }}
                startDelay={2000}
                cursorColor="#3F3D56"
                text="A premier wedding planner and event coordination company in Pakistan and abroad, Shan event management is your one stop shop for wedding and corporate events."
                multiTextDelay={1000}
                typeSpeed={50}
            />
        </div>
    )
}