#!/bin/sh

mkdir -p ${GITHUB_WORKSPACE:-$PWD}/.apt/cache/archives/partial ${GITHUB_WORKSPACE:-$PWD}/.apt/state/lists/partial

apt-get \
-q \
-y \
-o APT::Install-Recommends="false" \
-o Debug::NoLocking="true" \
-o Dir::Cache="${GITHUB_WORKSPACE:-$PWD}/.apt/cache" \
-o Dir::Etc::Parts="/dev/null" \
-o Dir::Etc::SourceParts="${GITHUB_WORKSPACE:-$PWD}/.apt/sources.list.d" \
-o Dir::Log="/dev/null" \
-o Dir::State="${GITHUB_WORKSPACE:-$PWD}/.apt/state" \
"$@"
