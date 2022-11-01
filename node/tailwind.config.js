// Risk & Vulnerability Assessment Reporting Engine

// Copyright 2022 The Risk & Vulnerability Reporting Engine Contributors, All Rights Reserved.
// (see Contributors.txt for a full list of Contributors)

// SPDX-License-Identifier: BSD-3-Clause

// Please see additional acknowledgments (including references to third party source code, object code, documentation and other files) in the license.txt file or contact permission@sei.cmu.edu for full terms.

// Created, in part, with funding and support from the United States Government. (see Acknowledgments file).

//  DM22-1011




module.exports = {
    presets: [
        require('@sds/tailwindcss-3')
    ],
    content: [
        './node_modules/@sds/components-vue3/src/components/**/*.{js,vue,ts}',
        '../ptportal/templates/**/*.{js,html}'
    ],
}