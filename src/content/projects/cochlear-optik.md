---
title: "Automated quality-control system for Cochlear \u2014 OPTIK Engineering internship"
summary: "Designed and delivered a clean-room-compliant device that identifies mislabelled or mis-manufactured implant components from their magnetic field. It replaced manual X-ray inspection and entered commercial manufacturing."
org: "OPTIK Engineering Consultancy \u00b7 Client: Cochlear"
period: "Winter 2023"
category: Industry
tags: [Python, Random forest, OCR, Fusion 360, GUI]
cover: 56298d_fed4828071264988bb80f1f5d596c192~mv2.png
featured: true
logos:
  - 56298d_0c026671a2ac44fa9e00849ca8f819fd~mv2.jpg
  - 56298d_05e542ced607497fb1b25ad74a1b1bb9~mv2.png
  - 56298d_4e2560c5b6cb48bc9a0f3b45eab47e5f~mv2.png
order: 3
gallery:
  - "56298d_64eca2244312418292f1f932274379f0~mv2.jpg | The project team"
  - "56298d_4dad0be415d7469382502d0ad0b0f7c8~mv2.png | Team lunch during the internship"
  - "56298d_9fb334a45dc54be89c6d5003c09b52f9~mv2.png | Render of the quality-control device"
  - "56298d_277edbc9c22240f8b594fc01c0477280~mv2.png | Exploded assembly drawing with parts list"
  - "56298d_a5375332f98342c486cc12301f3c132a~mv2.png | Inside the enclosure (render)"
  - "56298d_5c4e500106c54369ad17a0649756612e~mv2.png | Operator screen: barcode and magnet checks"
  - "56298d_90beaf3f8c6541099946393f89b36b2c~mv2.png | Assembling the device"
  - "56298d_7fab8513ba7041778f5566cc4825285c~mv2.png | The finished device"
  - "56298d_cffce6aa03e449968cf979270399f90f~mv2.png | MagScope, used to capture the magnetic-field scans"
---

In winter 2023, I completed a 12-week engineering internship at OPTIK Engineering Consultancy. With teammates Anish Chauhan, Adrian Kumar and Jacob Bayne, I delivered a project for Cochlear: an original quality-control device that identifies mislabelled or mis-manufactured implant components from their magnetic fields.

We worked with client representatives Patrick Sorsby (Director of Process Technology) and Gabriel Wainmann (Principal Engineer, Robotics), under the mentorship of Osman Mah, Wai Sum Peter Hau and Christopher Wilson.

## Outcome

- Prototyped across 6 devices with over 95% classification accuracy.
- Replaced manual X-ray inspection with an automated assessment taking under 2 seconds.
- After handover, the system entered commercial manufacturing at Cochlear.
- Found a critical memory leak in the vendor's API through stress testing.

## Mechanical design and manufacturing

The clean-room-compliant enclosure was modelled in Fusion 360, and technical drawings were produced to guide its fabrication by Ti2 Pty Ltd.

## Software

The system was built in Python and included:

- A random forest classifier distinguishing magnet types from MagCam MagScope scan data
- Optical character recognition (OCR) for label verification
- Scripted data acquisition through MagCam's MagScope software
- Automated startup and configuration
- Data handling and parsing
- Debugging support and custom error handling
- A graphical user interface for operators
- An architecture designed for future product compatibility
- Support documentation, FMEA, CAPA and DMR records, and operation flow diagrams
