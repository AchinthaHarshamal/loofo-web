'use client'

import React, { useState, useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Upload, Video, FileVideo, CheckCircle, AlertCircle, X } from 'lucide-react'

// Base API URL
const BASE_API_URL = 'https://iky4lwun5h.execute-api.ap-south-1.amazonaws.com/prod' // Your AWS API Gateway endpoint

interface UploadStatus {
  uploading: boolean
  progress: number
  success: boolean
  error: string | null
}

interface ThumbnailUploadResponse {
  uploadUrl: string
  thumbnailKey: string
  originalVideoName: string
  videoType: string
}

interface VideoUploadResponse {
  uploadUrl: string
  videoKey: string
  triggerKey: string
  originalVideoName: string
  videoType: string
}

export default function UploadVideosPage() {
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null)
  const [authorUserId, setAuthorUserId] = useState<string>('')
  const [baseUrl, setBaseUrl] = useState<string>(BASE_API_URL)
  const [videoUploadStatus, setVideoUploadStatus] = useState<UploadStatus>({
    uploading: false,
    progress: 0,
    success: false,
    error: null
  })
  const [thumbnailUploadStatus, setThumbnailUploadStatus] = useState<UploadStatus>({
    uploading: false,
    progress: 0,
    success: false,
    error: null
  })
  const [convertStatus, setConvertStatus] = useState<UploadStatus>({
    uploading: false,
    progress: 0,
    success: false,
    error: null
  })
  const [saveStatus, setSaveStatus] = useState<UploadStatus>({
    uploading: false,
    progress: 0,
    success: false,
    error: null
  })

  const videoInputRef = useRef<HTMLInputElement>(null)
  const thumbnailInputRef = useRef<HTMLInputElement>(null)

  const handleVideoFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file?.type?.startsWith('video/')) {
      setVideoFile(file)
      setVideoUploadStatus(prev => ({ ...prev, success: false, error: null }))
    } else {
      alert('Please select a valid video file')
    }
  }

  const handleThumbnailFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file?.type?.startsWith('video/')) {
      setThumbnailFile(file)
      setThumbnailUploadStatus(prev => ({ ...prev, success: false, error: null }))
    } else {
      alert('Please select a valid video file')
    }
  }

  const uploadFile = async (file: File, uploadUrl: string, setStatus: React.Dispatch<React.SetStateAction<UploadStatus>>) => {
    console.log('Starting file upload:', file.name, 'to URL:', uploadUrl)
    const formData = new FormData()
    formData.append('video', file)

    setStatus(prev => ({ ...prev, uploading: true, progress: 0, error: null }))

    try {
      const xhr = new XMLHttpRequest()

      // Track upload progress
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          const progress = Math.round((event.loaded / event.total) * 100)
          setStatus(prev => ({ ...prev, progress }))
        }
      })

      // Handle completion
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          console.log('File upload successful:', file.name)
          setStatus(prev => ({ ...prev, uploading: false, success: true, progress: 100 }))
        } else {
          console.error('File upload failed:', file.name, 'Status:', xhr.status, 'Response:', xhr.responseText)
          setStatus(prev => ({ 
            ...prev, 
            uploading: false, 
            error: `Upload failed with status: ${xhr.status}`,
            progress: 0
          }))
        }
      })

      // Handle errors
      xhr.addEventListener('error', () => {
        console.error('Network error during file upload:', file.name)
        setStatus(prev => ({ 
          ...prev, 
          uploading: false, 
          error: 'Network error occurred during upload',
          progress: 0
        }))
      })

      xhr.open('PUT', uploadUrl)
      xhr.setRequestHeader('Content-Type', file.type)
      xhr.send(file)

    } catch (error) {
      console.error('Error during file upload:', file.name, error)
      setStatus(prev => ({ 
        ...prev, 
        uploading: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        progress: 0
      }))
    }
  }

  const getThumbnailUploadUrl = async (thumbnailVideoName: string): Promise<ThumbnailUploadResponse | null> => {
    try {
      console.log('Requesting thumbnail upload URL for:', thumbnailVideoName)
      const response = await fetch(`${baseUrl}/getThumbnailUploadUrl?thumbnailVideoName=${encodeURIComponent(thumbnailVideoName)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      })
      
      console.log('Thumbnail upload URL response status:', response.status)
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('Thumbnail upload URL error response:', errorText)
        throw new Error(`Failed to get thumbnail upload URL: ${response.status} - ${errorText}`)
      }
      
      const data = await response.json()
      console.log('Thumbnail upload URL response data:', data)
      return data
    } catch (error) {
      console.error('Error getting thumbnail upload URL:', error)
      if (error instanceof Error) {
        if (error.message.includes('CORS') || error.message.includes('Access-Control-Allow-Origin')) {
          setThumbnailUploadStatus(prev => ({ 
            ...prev, 
            error: 'CORS Error: API server missing proper CORS configuration.' 
          }))
        } else if (error.message.includes('Failed to fetch')) {
          setThumbnailUploadStatus(prev => ({ 
            ...prev, 
            error: 'Network Error: Cannot reach API server.' 
          }))
        }
      }
      return null
    }
  }

  const getVideoUploadUrl = async (userId: string, videoName: string): Promise<VideoUploadResponse | null> => {
    try {
      console.log('Requesting video upload URL for userId:', userId, 'videoName:', videoName)
      const response = await fetch(`${baseUrl}/getReelVideoUploadUrl?userId=${encodeURIComponent(userId)}&videoName=${encodeURIComponent(videoName)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      })
      
      console.log('Video upload URL response status:', response.status)
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('Video upload URL error response:', errorText)
        throw new Error(`Failed to get video upload URL: ${response.status} - ${errorText}`)
      }
      
      const data = await response.json()
      console.log('Video upload URL response data:', data)
      return data
    } catch (error) {
      console.error('Error getting video upload URL:', error)
      if (error instanceof Error) {
        if (error.message.includes('CORS') || error.message.includes('Access-Control-Allow-Origin')) {
          setVideoUploadStatus(prev => ({ 
            ...prev, 
            error: 'CORS Error: API server missing proper CORS configuration.' 
          }))
        } else if (error.message.includes('Failed to fetch')) {
          setVideoUploadStatus(prev => ({ 
            ...prev, 
            error: 'Network Error: Cannot reach API server.' 
          }))
        }
      }
      return null
    }
  }

  const convertVideo = async (triggerKey: string, videoId: string): Promise<boolean> => {
    try {
      console.log('Converting video with triggerKey:', triggerKey, 'videoId:', videoId)
      setConvertStatus(prev => ({ ...prev, uploading: true, progress: 50, error: null }))
      
      const requestBody = {
        triggerKey,
        videoId
      }
      console.log('Convert request body:', requestBody)
      
      const response = await fetch(`${baseUrl}/convert`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(requestBody)
      })

      console.log('Convert response status:', response.status)

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Convert error response:', errorText)
        throw new Error(`Convert failed with status: ${response.status}`)
      }

      const responseData = await response.json()
      console.log('Convert response data:', responseData)

      setConvertStatus(prev => ({ ...prev, uploading: false, success: true, progress: 100 }))
      return true
    } catch (error) {
      console.error('Error converting video:', error)
      setConvertStatus(prev => ({ 
        ...prev, 
        uploading: false, 
        error: error instanceof Error ? error.message : 'Convert failed',
        progress: 0
      }))
      return false
    }
  }

  const saveVideoEntry = async (videoEntryId: string, thumbnailUrl: string): Promise<boolean> => {
    try {
      console.log('Saving video entry with videoEntryId:', videoEntryId, 'thumbnailUrl:', thumbnailUrl)
      setSaveStatus(prev => ({ ...prev, uploading: true, progress: 50, error: null }))
      
      const requestBody = {
        authorUserId,
        videoEntryId,
        title: "Sample Video Title",
        description: "Sample video description",
        thumbnailUrl,
        tags: ["sample", "video", "upload"]
      }
      console.log('Save video entry request body:', requestBody)
      
      const response = await fetch(`${baseUrl}/saveVideoEntry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(requestBody)
      })

      console.log('Save video entry response status:', response.status)

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Save video entry error response:', errorText)
        throw new Error(`Save failed with status: ${response.status}`)
      }

      const responseData = await response.json()
      console.log('Save video entry response data:', responseData)

      setSaveStatus(prev => ({ ...prev, uploading: false, success: true, progress: 100 }))
      return true
    } catch (error) {
      console.error('Error saving video entry:', error)
      setSaveStatus(prev => ({ 
        ...prev, 
        uploading: false, 
        error: error instanceof Error ? error.message : 'Save failed',
        progress: 0
      }))
      return false
    }
  }

  const handleVideoUpload = async () => {
    if (!videoFile || !authorUserId.trim() || !baseUrl.trim()) {
      alert('Please select a video file, enter author user ID, and configure base URL')
      return
    }

    const videoUploadData = await getVideoUploadUrl(authorUserId, videoFile.name)
    if (!videoUploadData) {
      setVideoUploadStatus(prev => ({ ...prev, error: 'Failed to get video upload URL' }))
      return
    }

    await uploadFile(videoFile, videoUploadData.uploadUrl, setVideoUploadStatus)
  }

  const handleThumbnailUpload = async () => {
    if (!thumbnailFile || !baseUrl.trim()) {
      alert('Please select a thumbnail file and configure base URL')
      return
    }

    const thumbnailUploadData = await getThumbnailUploadUrl(thumbnailFile.name)
    if (!thumbnailUploadData) {
      setThumbnailUploadStatus(prev => ({ ...prev, error: 'Failed to get thumbnail upload URL' }))
      return
    }

    await uploadFile(thumbnailFile, thumbnailUploadData.uploadUrl, setThumbnailUploadStatus)
  }

  const handleCompleteUpload = async () => {
    if (!videoFile || !thumbnailFile || !authorUserId.trim() || !baseUrl.trim()) {
      alert('Please select both files, enter author user ID, and configure base URL')
      return
    }

    try {
      console.log('Starting complete upload process...')
      
      // Get upload URLs
      const [videoUploadData, thumbnailUploadData] = await Promise.all([
        getVideoUploadUrl(authorUserId, videoFile.name),
        getThumbnailUploadUrl(thumbnailFile.name)
      ])

      if (!videoUploadData || !thumbnailUploadData) {
        const missingData = []
        if (!videoUploadData) missingData.push('video upload URL')
        if (!thumbnailUploadData) missingData.push('thumbnail upload URL')
        
        alert(`Failed to get ${missingData.join(' and ')}`)
        return
      }

      console.log('Upload URLs obtained, starting file uploads...')

      // Upload both files and wait for completion
      await Promise.all([
        uploadFile(videoFile, videoUploadData.uploadUrl, setVideoUploadStatus),
        uploadFile(thumbnailFile, thumbnailUploadData.uploadUrl, setThumbnailUploadStatus)
      ])

      console.log('File uploads completed, starting video conversion...')

      // Convert video
      const convertSuccess = await convertVideo(videoUploadData.triggerKey, videoUploadData.videoKey)
      
      if (convertSuccess) {
        console.log('Video conversion successful, saving video entry...')
        // Save video entry
        await saveVideoEntry(videoUploadData.videoKey, thumbnailUploadData.thumbnailKey)
      } else {
        console.error('Video conversion failed, skipping save step')
      }
    } catch (error) {
      console.error('Complete upload process failed:', error)
      alert(`Upload process failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  const removeVideoFile = () => {
    setVideoFile(null)
    setVideoUploadStatus({
      uploading: false,
      progress: 0,
      success: false,
      error: null
    })
    if (videoInputRef.current) {
      videoInputRef.current.value = ''
    }
  }

  const removeThumbnailFile = () => {
    setThumbnailFile(null)
    setThumbnailUploadStatus({
      uploading: false,
      progress: 0,
      success: false,
      error: null
    })
    if (thumbnailInputRef.current) {
      thumbnailInputRef.current.value = ''
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Upload Videos</h1>
        <p className="text-muted-foreground mt-2">
          Upload your main video and thumbnail video files
        </p>
      </div>

      {/* Author User ID Input */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Configuration</CardTitle>
          <CardDescription>
            Enter the API base URL and author user ID
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="baseUrl" className="text-sm font-medium">
                Base API URL
              </label>
              <input
                id="baseUrl"
                type="text"
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                placeholder="Enter base API URL"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="authorUserId" className="text-sm font-medium">
                Author User ID
              </label>
              <input
                id="authorUserId"
                type="text"
                value={authorUserId}
                onChange={(e) => setAuthorUserId(e.target.value)}
                placeholder="Enter author user ID"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Main Video Upload */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-5 w-5" />
              Main Video
            </CardTitle>
            <CardDescription>
              Upload your main video file
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
              <input
                ref={videoInputRef}
                type="file"
                accept="video/*"
                onChange={handleVideoFileSelect}
                className="hidden"
                id="video-upload"
              />
              <label
                htmlFor="video-upload"
                className="cursor-pointer flex flex-col items-center gap-2"
              >
                <Upload className="h-8 w-8 text-gray-400" />
                <span className="text-sm font-medium">Click to upload main video</span>
                <span className="text-xs text-gray-500">MP4, AVI, MOV, etc.</span>
              </label>
            </div>

            {videoFile && (
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <FileVideo className="h-4 w-4" />
                    <span className="text-sm font-medium truncate">{videoFile.name}</span>
                  </div>
                  <button
                    onClick={removeVideoFile}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="text-xs text-gray-500 mb-3">
                  Size: {formatFileSize(videoFile.size)}
                </div>

                {!videoUploadStatus.uploading && !videoUploadStatus.success && (
                  <button
                    onClick={handleVideoUpload}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Upload Main Video
                  </button>
                )}

                {videoUploadStatus.uploading && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Uploading...</span>
                      <span>{videoUploadStatus.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${videoUploadStatus.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {videoUploadStatus.success && (
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>Upload completed successfully!</span>
                  </div>
                )}

                {videoUploadStatus.error && (
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>{videoUploadStatus.error}</span>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Thumbnail Video Upload */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileVideo className="h-5 w-5" />
              Thumbnail Video
            </CardTitle>
            <CardDescription>
              Upload your thumbnail video file
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
              <input
                ref={thumbnailInputRef}
                type="file"
                accept="video/*"
                onChange={handleThumbnailFileSelect}
                className="hidden"
                id="thumbnail-upload"
              />
              <label
                htmlFor="thumbnail-upload"
                className="cursor-pointer flex flex-col items-center gap-2"
              >
                <Upload className="h-8 w-8 text-gray-400" />
                <span className="text-sm font-medium">Click to upload thumbnail video</span>
                <span className="text-xs text-gray-500">MP4, AVI, MOV, etc.</span>
              </label>
            </div>

            {thumbnailFile && (
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <FileVideo className="h-4 w-4" />
                    <span className="text-sm font-medium truncate">{thumbnailFile.name}</span>
                  </div>
                  <button
                    onClick={removeThumbnailFile}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="text-xs text-gray-500 mb-3">
                  Size: {formatFileSize(thumbnailFile.size)}
                </div>

                {!thumbnailUploadStatus.uploading && !thumbnailUploadStatus.success && (
                  <button
                    onClick={handleThumbnailUpload}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Upload Thumbnail Video
                  </button>
                )}

                {thumbnailUploadStatus.uploading && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Uploading...</span>
                      <span>{thumbnailUploadStatus.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${thumbnailUploadStatus.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {thumbnailUploadStatus.success && (
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>Upload completed successfully!</span>
                  </div>
                )}

                {thumbnailUploadStatus.error && (
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>{thumbnailUploadStatus.error}</span>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Process Status Cards */}
      {(convertStatus.uploading || convertStatus.success || convertStatus.error || 
        saveStatus.uploading || saveStatus.success || saveStatus.error) && (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {/* Convert Status */}
          {(convertStatus.uploading || convertStatus.success || convertStatus.error) && (
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Video Conversion</CardTitle>
              </CardHeader>
              <CardContent>
                {convertStatus.uploading && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Converting...</span>
                      <span>{convertStatus.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${convertStatus.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {convertStatus.success && (
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>Video converted successfully!</span>
                  </div>
                )}

                {convertStatus.error && (
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>{convertStatus.error}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Save Status */}
          {(saveStatus.uploading || saveStatus.success || saveStatus.error) && (
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Save Video Entry</CardTitle>
              </CardHeader>
              <CardContent>
                {saveStatus.uploading && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Saving...</span>
                      <span>{saveStatus.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${saveStatus.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {saveStatus.success && (
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>Video entry saved successfully!</span>
                  </div>
                )}

                {saveStatus.error && (
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>{saveStatus.error}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Upload All Button */}
      {videoFile && thumbnailFile && !videoUploadStatus.success && !thumbnailUploadStatus.success && (
        <div className="mt-6">
          <button
            onClick={handleCompleteUpload}
            disabled={videoUploadStatus.uploading || thumbnailUploadStatus.uploading}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            Upload Both Videos and Process
          </button>
        </div>
      )}
    </div>
  )
}
